# README #

This is a simple React application showing the news list using the newsapi.org endpoints.

Running the app we should be able to see the latest news. The user has the ability to filter by keywords. If the user clicks on a news item it will navigate to a page displaying the full news article selected.

The frontend is built using React + redux. The backend is in NodeJS. Although, the news api endpoint would have been called directly from react, it has been called from NodeJS for the demonstratory purpose.

### How do I get set up? ###

* `npm install`
* `npm start`

If the api token is expired, you can generate one from the newsapi.org website. Add the token inside api/.env with the key

Ex: `NEWS_API_KEY=XXXXXXXXXXXXXXXXXXXX`
