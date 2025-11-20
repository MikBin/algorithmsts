from playwright.sync_api import Page, expect, sync_playwright
import os
import time
import subprocess
import sys

def test_sorting_functionality(page: Page):
    # Navigate to local server
    page.goto("http://localhost:8083/vector-similarity.html")

    # Wait for app to mount
    page.wait_for_selector("#app")

    # Target the outliers table
    outlier_table = page.get_by_test_id("outliers-table").first
    header_name = outlier_table.get_by_test_id("header-0")

    # Wait for header
    header_name.wait_for(state="visible", timeout=5000)

    # Click to sort ascending
    header_name.click()
    expect(header_name).to_contain_text("↑")

    # Take screenshot of sorted table
    page.screenshot(path="verification/sorted_table_asc.png")
    print("Screenshot saved: sorted_table_asc.png")

    # Click to sort descending
    header_name.click()
    expect(header_name).to_contain_text("↓")

    # Take screenshot of descending sort
    page.screenshot(path="verification/sorted_table_desc.png")
    print("Screenshot saved: sorted_table_desc.png")

if __name__ == "__main__":
    # Start the server
    server_path = os.path.join(os.getcwd(), "visualization")
    print(f"Starting server at {server_path}")

    # Start python http server
    process = subprocess.Popen(
        [sys.executable, "-m", "http.server", "8083"],
        cwd=server_path,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )

    try:
        # Give server a moment to start
        time.sleep(2)

        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            try:
                test_sorting_functionality(page)
            finally:
                browser.close()
    finally:
        process.kill()
