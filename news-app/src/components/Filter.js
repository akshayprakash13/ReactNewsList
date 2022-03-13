import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { searchNews, loadNews } from '../actions/news'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '16px'
    },
    title: {
        flexGrow: 1,
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    buttonBlock: {
      height: '55px'
    }
}))

function Filter(props) {
    const classes = useStyles()
    const [query, setQuery] = React.useState('')
    const { searchNews } = props
    return (
        <div className={classes.root}>
          <Grid container direction="row" spacing={2}>
            <Grid item lg={10}>
                <TextField
                  type="text"
                  placeholder="Search"
                  fullWidth
                  name="search"
                  variant="outlined"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
            </Grid>
            <Grid item lg={2}>
              <Button
                variant="contained"
                color="primary"
                type="button"
                className={classes.buttonBlock}
                onClick={() => {
                  console.log('akshay', query + '324')
                  if (query !== '') {
                    searchNews({ query, page: 1 })
                  } else {
                    loadNews({ page: 1 })
                  }
                }}
              >
                  Search
              </Button>
            </Grid>
          </Grid>
        </div>
    );
}

const mapDispatchToProps = { searchNews }

export default connect(null, mapDispatchToProps)(Filter);
