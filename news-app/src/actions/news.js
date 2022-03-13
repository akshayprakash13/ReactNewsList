
import api from '../api'

export function loadNews({ page = 1, pageSize = 10 }) {
  return async function (dispatch) {
    try {
      dispatch({ type: 'REQUEST_START', message: 'loading news...' }) // async action
      const response = (await api.loadNews({ page, pageSize })).data;
      if (response.success) {
        dispatch({ type: 'REQUEST_END', message: '' }) // async action
        dispatch({ type: 'LOAD_NEWS_SUCCESS', news: response.data?.articles, totalNews: response.data?.totalResults })
        dispatch({ type: 'SET_PAGE', page })
        // dispatch({ type: 'SET_QUERY', query: '' })
      } else {
        dispatch({ type: 'REQUEST_ERROR', message: response.error.message })
      }
    } catch (err) {
      dispatch({ type: 'REQUEST_ERROR', message: err.message })
    }
  }
}

export function searchNews({ query = '', page = 1, pageSize = 10 }) {
  return async function (dispatch) {
    try {
      dispatch({ type: 'REQUEST_START', message: 'loading news...' }) // async action
      const response = (await api.searchNews({ query, page, pageSize })).data;
      if (response.success) {
        dispatch({ type: 'SET_QUERY', query })
        dispatch({ type: 'SET_PAGE', page })
        dispatch({ type: 'REQUEST_END', message: '' }) // async action
        dispatch({ type: 'LOAD_NEWS_SUCCESS', news: response.data?.articles, totalNews: response.data?.totalResults })
      } else {
        dispatch({ type: 'REQUEST_ERROR', message: response.error.message })
      }
    } catch (err) {
      dispatch({ type: 'REQUEST_ERROR', message: err.message })
    }
  }
}

export function setQuery(query = '') {
  return async function (dispatch) {
    dispatch({ type: 'SET_QUERY', query }) // async action
  }
}

