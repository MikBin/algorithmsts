import sys
from playwright.sync_api import sync_playwright, expect

def verify_visualization(page):
    # Navigate to the local vite server
    # Assuming standard port 5173. The script needs the server running.
    page.goto("http://localhost:5173/visualization/vector-similarity.html")

    # Check for main title
    expect(page.get_by_role("heading", name="Vector Similarity Analysis")).to_be_visible()

    # Check for Benchmark Chart
    expect(page.get_by_role("heading", name="Performance Benchmark")).to_be_visible()
    expect(page.locator("#benchmark-chart svg")).to_be_visible()

    # Check for tables (Outlier Resiliency)
    expect(page.get_by_role("heading", name="Outlier Resiliency")).to_be_visible()
    # Expect at least one table in outliers container
    expect(page.locator("#outliers-container table").first).to_be_visible()

    # Check comparison demo
    expect(page.get_by_role("heading", name="Comparison Demo Matrix")).to_be_visible()
    expect(page.locator("#demo-matrix table")).to_be_visible()

    # Take a screenshot
    page.screenshot(path="verification/visualization.png", full_page=True)
    print("Verification successful, screenshot saved.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_visualization(page)
        except Exception as e:
            print(f"Error: {e}")
            sys.exit(1)
        finally:
            browser.close()
