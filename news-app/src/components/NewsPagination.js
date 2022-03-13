import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux'
import { searchNews, loadNews } from '../actions/news'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '16px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
}));

// component for pagination of the news list item
function NewsPagination(props) {
  const classes = useStyles()
  const { totalNews, searchNews, loadNews, page, query, paginationCount } = props
  
  const handleChange = useCallback((event, value) => {
    if (query === '') {
      loadNews({ query, page: value })
    } else {
      searchNews({ query, page: value })
    }
  }, [loadNews, searchNews, query])

  return (
    <div className={classes.root}>
      <Pagination total={totalNews} count={paginationCount} page={page} onChange={handleChange} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { page = 1, query = '', totalNews = 0, paginationCount = 1 } = state.news;
  return { page, query, totalNews, paginationCount }
}
const mapDispatchToProps = { searchNews, loadNews }

export default connect(mapStateToProps, mapDispatchToProps)(NewsPagination);
