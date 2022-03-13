
import axios from 'axios'

const baseUrl = 'http://localhost:4002/api'
// Can be done directly to the news api, used node api instead to demontrate the full stack code

const api = {
    loadNews(params) {
        return axios.get(`${baseUrl}/news/top`, { params })
    },
    searchNews(params) {
        return axios.get(`${baseUrl}/news/search`, { params })
    },
}

export default api;
