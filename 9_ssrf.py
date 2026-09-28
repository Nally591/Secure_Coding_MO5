# Vulnerable code

import requests

url = input("Enter URL: ")

response = requests.get(url)

print(response.text)


# Secure code

from urllib.parse import urlparse
import requests

url = input("Enter URL: ")

parsed_url = urlparse(url)

allowed_hosts = [
    "example.com",
    "api.example.com"
]

if parsed_url.scheme not in ["http", "https"]:
    print("Invalid URL scheme")

elif parsed_url.hostname not in allowed_hosts:
    print("URL not allowed")

else:
    response = requests.get(url, timeout=5)
    print(response.text)