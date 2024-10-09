import urllib.request
from urllib.parse import urljoin
from bs4 import BeautifulSoup


baseurl = "https://apod.nasa.gov/apod/archivepix.html"
content = urllib.request.urlopen("https://apod.nasa.gov/apod/archivepix.html").read()


BeautifulSoup(content, "lxml").find_all("a") 

a_tags = BeautifulSoup(content, "lxml").find_all("a") 


for link in a_tags:
    print("link")
    href = urljoin(baseurl, link["href"])

    content =  urllib.request.urlopen(href).read()

    BeautifulSoup

