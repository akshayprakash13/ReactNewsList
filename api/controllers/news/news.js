/** Copyright (c) 2019 - Present, Wissen Technology**/
'use strict';

const lang   = require('../../config/lang');
const acronym   = require('../../config/acronyms');
const requester = require('../../services/requester')

const news = {

    /**
     * get news list
     * @param {Obj} req 
     */
    async getNewsList(req) {
        try {
            const { page = 1, pageSize = 10 } = req.query
            const newsApiRequester = await requester.initNewsApiRequester()
            const params = {
                country: 'us',
                apiKey: process.env.NEWS_API_KEY,
                page, pageSize
            }
            const data = await newsApiRequester.get('/v2/top-headlines', { params })
            return {
                success: true,
                responseStatus: acronym.responseStatus.SUCCESS,
                message: lang.success.userCreated,
                data
            }
        }  catch(err) {
            global.CONSOLE(err)
            return {
                success: false,
                responseStatus: acronym.responseStatus.INTERNALSERVERERROR,
                errorType: acronym.errorType.SERVERERROR,
                errorMessage: acronym.errorMessage.SERVERERRORMESSAGE,
                errorsArray: []
            }
        }
    },
    
    /**
     * filter articles
     * @param {Obj} req 
     */
    async searchNewsArticles(req) {
        try {
            const { query = '', page = 1, pageSize = 10 } = req.query
            const newsApiRequester = await requester.initNewsApiRequester()
            const params = {
                q: query,
                searchIn: 'title,description',
                language: 'en',
                sortBy: 'publishedAt',
                apiKey: process.env.NEWS_API_KEY,
                page, pageSize
            }
            const data = await newsApiRequester.get('/v2/everything', { params })
            return {
                success: true,
                responseStatus: acronym.responseStatus.SUCCESS,
                message: lang.success.userCreated,
                data
            }
        }  catch(err) {
            global.CONSOLE(err)
            return {
                success: false,
                responseStatus: acronym.responseStatus.INTERNALSERVERERROR,
                errorType: acronym.errorType.SERVERERROR,
                errorMessage: acronym.errorMessage.SERVERERRORMESSAGE,
                errorsArray: []
            }
        }
    },
}

module.exports = { news }