import time
from playwright.sync_api import sync_playwright

def test_visualizer():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Go directly to the counting sort page
        url = "http://localhost:5173/visualization/algorithms/sorting/counting-sort/index.html"
        print(f"Navigating to {url}...")
        page.goto(url)

        # Wait for page to load
        page.wait_for_timeout(2000)

        print(f"Current URL: {page.url}")

        # Take a screenshot of the initial state
        page.screenshot(path="counting_sort_page.png", full_page=True)

        # Click "Start Sort"
        print("Starting sort...")
        page.click("#btn-start", timeout=5000)

        # Wait for some sorting to happen
        page.wait_for_timeout(3000)

        # Take a screenshot during sort
        page.screenshot(path="counting_sort_progress.png", full_page=True)

        print("Done!")
        browser.close()

test_visualizer()
