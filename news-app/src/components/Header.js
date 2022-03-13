import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },

    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News App
                     </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;

