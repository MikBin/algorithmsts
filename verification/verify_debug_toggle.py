from playwright.sync_api import Page, expect, sync_playwright
import os

def verify_debug_panel(page: Page):
    print("Navigating to page without debug param...")
    page.goto("http://localhost:8080/visualization/vector-similarity.html")

    print("Waiting for canvas...")
    page.wait_for_selector("canvas", timeout=10000)

    print("Checking debug panel hidden by default...")
    debug_panel = page.locator("#debug-panel")
    expect(debug_panel).to_be_hidden()

    print("Clicking debug toggle...")
    page.click("button:has-text('Debug')")

    print("Checking debug panel visible...")
    expect(debug_panel).to_be_visible()

    # Take screenshot
    output_path = "/home/jules/verification/verification_debug_toggle.png"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    page.screenshot(path=output_path)
    print(f"Screenshot saved to {output_path}")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_debug_panel(page)
        except Exception as e:
            print(f"Error: {e}")
            exit(1)
        finally:
            browser.close()
