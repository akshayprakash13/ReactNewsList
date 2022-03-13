const PAGESIZE = 10
const initalState = {
  newsList: [],
  page: 1,
  pageSize: PAGESIZE,
  paginationCount: 1,
  query: '',
  totalNews: 0
}

export function newsReducer(state = initalState, action) {
  let { type } = action;
  switch (type) {
    case 'LOAD_NEWS_SUCCESS': {
      let { news, totalNews } = action;
      return { ...state, newsList: news, totalNews, paginationCount: Math.ceil(totalNews/PAGESIZE) }
    }
    case 'SET_QUERY': {
      let { query } = action;
      return { ...state, query, page: 1, pageSize: 10 }
    }
    case 'SET_PAGE': {
      let { page } = action;
      return { ...state, page }
    }
    default:
      return state;
  }
}