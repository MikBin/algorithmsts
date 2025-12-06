# Diagnostic Guide: "Vector Similarity Library Not Loaded"

This guide addresses the error: **`Vector Similarity library not loaded (window.VectorSimilarity is missing)`**.

## Quick Fix (Most Common Cause)

If you are setting up the project for the first time or have just pulled changes, the build artifacts are likely missing.

1.  **Build the project:**
    ```bash
    npm install
    npm run build
    ```
2.  **Generate analysis data** (required for the visualization app to fully function):
    ```bash
    npm run analyze-similarity
    ```
3.  **Serve from the project root:**
    ```bash
    # Using Python 3
    python3 -m http.server
    # Or any other static server
    ```
4.  **Access the page:**
    Navigate to `http://localhost:8000/visualization/vector-similarity/index.html`.

---

## Diagnostic Checklist

If the "Quick Fix" does not resolve the issue, follow this systematic checklist to identify the root cause.

### 1. Verify File Existence and Paths
**Symptom:** Browser console shows `404 Not Found` for `vector-similarity.umd.js`.

*   [ ] **Check `dist/` folder:** Ensure the `dist/` directory exists in the project root. If not, run `npm run build`.
*   [ ] **Check Script Path:** In `visualization/vector-similarity/index.html`, verify the `<script>` tag:
    ```html
    <script src="../../dist/vector-similarity/vector-similarity.umd.js"></script>
    ```
    *   **Context Matters:** This path (`../../dist/...`) assumes the HTML file is accessed from a subdirectory (e.g., `/visualization/vector-similarity/`) and the server root is the project root.
    *   **Test:** Open the Network tab in Developer Tools. Reload. If the request for the `.js` file is red (404), check the Request URL.
        *   *Correct:* `http://localhost:8000/dist/vector-similarity/vector-similarity.umd.js`
        *   *Incorrect (example):* `http://localhost:8000/visualization/dist/...` (Implies path is not relative enough or server root is different).

### 2. Verify Global Variable Exposure
**Symptom:** File loads (200 OK), but `window.VectorSimilarity` is `undefined`.

*   [ ] **Inspect the Bundle:** Open `dist/vector-similarity/vector-similarity.umd.js`. Search for `VectorSimilarity`.
    *   *Expectation:* You should see code setting `global.VectorSimilarity = ...` or `exports.VectorSimilarity = ...` inside the UMD wrapper.
    *   *Fix:* Check `rollup.config.ts`. Ensure the `output.name` is set:
        ```typescript
        {
          file: "dist/vector-similarity/vector-similarity.umd.js",
          format: "umd",
          name: "VectorSimilarity", // This defines the global variable name
          // ...
        }
        ```

### 3. Script Loading Order
**Symptom:** Error appears immediately on page load, or logic runs before library loads.

*   [ ] **Synchronous vs Asynchronous:** The script tag should generally be in the `<head>` (blocking) or at the end of `<body>`.
    *   *Current Setup:* It is in `<head>` without `async` or `defer`. This is correct for this app because the Vue app mounts later and checks for `window.VectorSimilarity`.
*   [ ] **Vue Mounting:** Ensure the Vue app checks for the global *after* the DOM is ready.
    *   *Code Check:* The `SimilarityCalculator` component uses `onMounted` and checks `if (window.VectorSimilarity)`. This is robust.

### 4. Caching Issues
**Symptom:** You rebuilt the code, but the browser still sees the old version.

*   [ ] **Hard Reload:** Press `Ctrl+Shift+R` (Cmd+Shift+R on Mac) to clear the cache for the page.
*   [ ] **Disable Cache:** In DevTools -> Network tab, check "Disable cache" while DevTools is open.

### 5. Content Security Policy (CSP)
**Symptom:** Console shows `Refused to load script... because it violates the following Content Security Policy directive`.

*   [ ] **Check Meta Tags:** Look for `<meta http-equiv="Content-Security-Policy" ...>` in `index.html` or `vector-similarity.html`.
*   [ ] **Allow Local Sources:** Ensure `script-src` includes `'self'` (for relative paths) or the specific CDN domains if you use them.

---

## Best Practices for Third-Party Libraries

1.  **Bundle Management:** Always define explicit build steps for client-side libraries (UMD/IIFE) if they are not being bundled by the consuming app (e.g., via Webpack/Vite).
2.  **Version Control:** Do not commit `dist/` or build artifacts to Git. Rely on CI/CD or pre-start scripts (`npm run build`) to generate them.
3.  **Defensive Coding:**
    *   Don't assume the library is loaded.
    *   Use a "retry" mechanism or a loading state.
    *   Example used in `main.js`:
        ```javascript
        if (window.VectorSimilarity) {
            calculate();
        } else {
            // Simple retry for race conditions (though script tag order should prevent this)
            setTimeout(() => { ... }, 500);
        }
        ```
4.  **Environment Consistency:** Ensure your development server root matches your production path strategy. Serving from the *project root* is the safest convention for monorepos or projects with shared `dist` folders.
