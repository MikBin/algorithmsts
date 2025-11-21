from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_calculator(page: Page):
    # 1. Arrange: Go to the visualization page
    page.goto("http://localhost:8000/visualization/vector-similarity.html")

    # Wait for the calculator to be visible
    expect(page.get_by_text("Interactive Similarity Calculator")).to_be_visible()

    # 2. Act: Input vectors
    # Vector A default is 1, 2, 3, 4, 5
    # Vector B default is 5, 4, 3, 2, 1

    # Let's change them to something specific to verify calculation
    # A = [1, 0, 1]
    # B = [0, 1, 0]
    # Cosine should be 0

    vector_a_input = page.locator("textarea").first
    vector_b_input = page.locator("textarea").last

    vector_a_input.fill("1, 0, 1")
    vector_b_input.fill("0, 1, 0")

    # Click Calculate
    calculate_btn = page.get_by_role("button", name="Calculate Similarities")
    calculate_btn.click()

    # 3. Assert: Check for results
    # We expect a table with results
    results_table = page.get_by_test_id("calculator-results")
    expect(results_table).to_be_visible()

    # Check for Cosine Similarity result (should be 0)
    # Note: The function name might be 'cosineSimilarity' or similar
    expect(results_table).to_contain_text("cosineSimilarity")
    expect(results_table).to_contain_text("0.0000")

    # Check for Euclidean Distance result
    # Sqrt((1-0)^2 + (0-1)^2 + (1-0)^2) = Sqrt(3) ≈ 1.732
    # Note: The library has 'euclideanDistance' but we might filter it if it's not exported or has wrong signature?
    # The library exports 'euclideanSimilarity' which is 1 / (1 + dist) = 1 / (1 + 1.732) ≈ 0.366
    expect(results_table).to_contain_text("euclideanSimilarity")
    # expect(results_table).to_contain_text("0.3660") # approximate

    # 4. Screenshot
    page.screenshot(path="/home/jules/verification/calculator_verification.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_calculator(page)
            print("Verification script passed successfully!")
        except Exception as e:
            print(f"Verification script failed: {e}")
            page.screenshot(path="/home/jules/verification/calculator_failure.png")
            raise
        finally:
            browser.close()
