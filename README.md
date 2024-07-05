Web Scraper on Node.JS

First of all use npm init to automaticly install all depencencies.

Project connected to MongoDb, so you need a MongoDb cluster and free database(or just comment(remmove) lines related to Mongo)

Connection take place in 10th line app.js. Just replace mine connection to yours.

To begin scraping you need to start your server by command "npm start".
You'll have a server on localhost:5000.

After that you need to open(or download) a Postman - application for working and testing server routes, connection etc.
Link for downloading: https://rozetka.com.ua/ua/apple-macbook-air-136-m2-256gb-2022-space-gray/p343424014/

Than you need to write a "http//:localhost:5000/products" into a search bar, choose "GET" request and press "POST" button.

If you've done everthing right you'll get a response with a JSON object with information about a laptop from rozetka.com.ua

You can scrape another items that allowed in the website. For that you need:
Navigate to https://rozetka.com.ua/ua and choose any item (like computer or laptop) and copy search link
For example https://rozetka.com.ua/ua/hp-9g9j1ea/p404328735/

Paste the link into 8th line in scraper.js, save and click the "POST" button in Postman.
You'll have another JSON object with information about selected item.