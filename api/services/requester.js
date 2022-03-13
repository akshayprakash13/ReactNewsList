const axios = require('axios')
const config = require('../config/config')

const initNewsApiRequester = () => {
  const requester = axios.create({
    baseURL: config.newsApi.apiBaseUrl,
  })
  
  requester.interceptors.request.use(config => {
    return config
  })
  
  requester.interceptors.response.use(response => {
    if (response.status >= 200 && response.status < 206) {
      return response.data
    }
    return Promise.reject(response)
  })

  return requester
}

module.exports = { initNewsApiRequester }

