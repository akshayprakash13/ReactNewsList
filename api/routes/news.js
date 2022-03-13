const express = require('express')
const newsController = require('../controllers/news/news')

const { wrapControllerFunction } = require('../middlewares')

const router = express.Router();

router.get('/top',        wrapControllerFunction(newsController.news.getNewsList.bind(newsController)))
router.get('/search',     wrapControllerFunction(newsController.news.searchNewsArticles.bind(newsController)))

module.exports = router;