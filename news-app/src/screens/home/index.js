import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadNews } from '../../actions/news'
import NewsItem from '../../components/NewsItem'
import Filter from '../../components/Filter'
import NewsPagination from '../../components/NewsPagination'
import { makeStyles } from '@material-ui/core/styles';

import {
  Typography
} from '@material-ui/core';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    margin: '10px auto'
  },
  emptylist: {
    textAlign: 'center',
    width: '50%',
    margin: '10px auto'
  },
}))

const Home = (props) => {
  const classes = useStyles()
  useEffect(() => {
    const { loadNews } = props
    loadNews({ page: 1 })
  }, [])

  const { newsList } = props;
  
  if (newsList.length === 0) {
    return (
      <>
        <Filter />
        <div className={[classes.root, classes.emptylist]}>
          <Typography variant="h5" component="h3">
            No news yet !!!
          </Typography>
        </div>
        {/* <NewsPagination /> */}
      </>
    )
  } else {
    return (
      <>
        <div className={classes.root}>
          <Filter />
          <div>
            {
              newsList.map(newsItem => <NewsItem key={newsItem.title} newsItem={newsItem} />)
            }
          </div>
          <NewsPagination />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { newsList = [] } = state.news;
  return { newsList }
}
const mapDispatchToProps = { loadNews }

export default connect(mapStateToProps, mapDispatchToProps)(Home);