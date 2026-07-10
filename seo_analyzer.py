import urllib.request
import urllib.parse
import json
import sys
from html.parser import HTMLParser

class SEOHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.in_heading = False
        self.current_heading_type = None
        self.seo_data = {
            "title": "",
            "description": "",
            "headings": {
                "h1": [],
                "h2": [],
                "h3": []
            }
        }
        
    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == "title":
            self.in_title = True
        elif tag in ["h1", "h2", "h3"]:
            self.in_heading = True
            self.current_heading_type = tag
        elif tag == "meta":
            name = attrs_dict.get("name", "").lower()
            prop = attrs_dict.get("property", "").lower()
            content = attrs_dict.get("content", "")
            if name == "description" or prop == "og:description":
                self.seo_data["description"] = content

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        elif tag in ["h1", "h2", "h3"]:
            self.in_heading = False
            self.current_heading_type = None

    def handle_data(self, data):
        clean_data = data.strip()
        if not clean_data:
            return
        if self.in_title:
            self.seo_data["title"] = clean_data
        elif self.in_heading and self.current_heading_type:
            self.seo_data["headings"][self.current_heading_type].append(clean_data)

def analyze_url(url):
    # Auto-prepend scheme if missing
    if not url.startswith("http://") and not url.startswith("https://"):
        url = "https://" + url
        
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
        )
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            parser = SEOHTMLParser()
            parser.feed(html)
            return parser.seo_data
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python seo_analyzer.py <url1> [url2] ...")
        print("Example: python seo_analyzer.py sawadhee.com roseatehotels.com")
        sys.exit(1)
        
    urls = sys.argv[1:]
    results = {}
    
    for url in urls:
        print(f"Scraping & analyzing: {url}...")
        results[url] = analyze_url(url)
        
    output_file = "competitor_seo_report.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
        
    print(f"\nAnalysis completed successfully! Results written to {output_file}")
