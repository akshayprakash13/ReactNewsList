import { makeStyles } from '@material-ui/core/styles';
import PlaceholderImage from '../assets/images/placeholder.png'
import moment from 'moment'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titleDescription: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      marginBottom: 8
    },
    description: {
      flexGrow: 1,
      color: 'grey',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical'
    },
    buttons: {
      '& > *': {
          margin: theme.spacing(1),
      },
    },
    container:{
      display: 'flex',
      margin: '5px 10px 16px 10px',
      width: '100%',
      textAlign: 'justify',
      borderBottom: '1px solid grey',
      borderBottomColor: 'grey'
    },
    wrapper:{
      padding: 16,
      display: 'flex',
      flexDirection: "row",
      backgroundColor:"white",
      width: '100%'
    },
    imgWrapper: {
      height: 100,
      width: 150,
      minWidth: 150,
      backgroundColor: 'grey',
      marginRight: 16 * 1.5
    },
    img: {
      height: '100%',
      width: '100%',
    },
    newsContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'space-between'
    },
    bottom:{
      flexDirection: "row",
      display: 'flex',
    },
    source:{
      fontSize: 12,
      fontWeight: 'bold',
      color: 'black'
    },
    date:{
      fontSize: 12,
      color: 'grey',
      marginLeft: 16
    },
}))

function NewsItem ({ newsItem }) {
    const classes = useStyles()

    return (
      <div className={classes.container}>
        <div className={[classes.wrapper]}>
            <div className={classes.imgWrapper}>
                {
                    newsItem.urlToImage && <img alt={newsItem.urlToImage} src={newsItem.urlToImage} className={classes.img}/>
                }
                {
                    !newsItem.urlToImage && <img alt={'placeholder'} src={PlaceholderImage} className={classes.img}/>
                }
            </div>
            <div className={classes.newsContainer}>
              <div className={[classes.titleDescription]}>
                <div className={[classes.title]}>
                  <Link to={{ pathname: newsItem.url }} target="_blank">
                    { newsItem.title }
                  </Link>
                </div>
                <div className={[classes.description]}>
                    { newsItem.description }
                </div>
              </div>

              <div className={[classes.bottom]}>
                <span className={[classes.source]}>
                    { newsItem.source.name }
                </span>
                <span className={[classes.date]}>
                    {moment(newsItem.publishedAt).fromNow()}
                </span>
              </div>
            </div>
        </div>
      </div>
    );
}

export default NewsItem;

