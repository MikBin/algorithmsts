from playwright.sync_api import sync_playwright

def verify_visualization():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.wait_for_timeout(2000)
        try:
            # Since we set root to visualization, URL should be just /vector-similarity.html
            url = "http://localhost:5173/vector-similarity.html"
            print(f"Navigating to {url}")
            response = page.goto(url, timeout=5000)

            if response.status == 404:
                 # Fallback if root didn't work as expected
                 url = "http://localhost:5173/visualization/vector-similarity.html"
                 print(f"Navigating to {url}")
                 response = page.goto(url, timeout=5000)

            print(f"Status: {response.status}")
            page.wait_for_load_state("networkidle")

            print("Waiting for selector...")
            try:
               page.wait_for_selector("text=normalizedCosineSimilarity", timeout=5000)
               print("Table data found.")
            except:
               print("Table data NOT found. Dumping body text:")
               print(page.inner_text("body"))

            page.screenshot(path="verification/visualization_table.png", full_page=True)
            print("Screenshot taken at verification/visualization_table.png")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_visualization()
