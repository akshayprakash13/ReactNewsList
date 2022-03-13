/** Copyright (c) 2020 - Present, Wissen Technology**/
const acronym = require('./config/acronyms')

/**
 * Response handler middleware
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 */
const wrapControllerFunction = (callback) => async function(req, res) {
    function sendResponse({ success = true, responseStatus = acronym.responseStatus.SUCCESS, message = '', errorType = null, errorMessage = null, errorsArray = [], data = {} }) {
        res.status(responseStatus).json({
            success,
            message,
            error: success ? {} : {
                Type: errorType,
                message: errorMessage,
                errors: errorsArray
            },
            data
        })
    }

    try {
        const responseObj = await callback(req, res);
        sendResponse(responseObj);
    } catch(err) {
        global.CONSOLE(err)
        const responseObj = {
            success: false,
            responseStatus: acronym.responseStatus.INTERNALSERVERERROR,
            errorType: acronym.errorType.SERVERERROR,
            errorMessage: acronym.errorMessage.SERVERERRORMESSAGE,
            errorsArray: []
        }
        sendResponse(responseObj);
    }   
}

module.exports = {
  wrapControllerFunction
}