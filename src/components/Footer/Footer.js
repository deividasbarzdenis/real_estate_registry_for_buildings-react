import {makeStyles, Typography} from "@material-ui/core";
import {Copyright} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        fontFamily: 'Nunito',
        background: 'none',
    },
    colorTitle: {
        color: '#3591ED',
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom className={classes.colorTitle}>
                    Property value app
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p" className={classes.colorTitle}>
                    Easy property registration for every one!
                </Typography>
                <Copyright />
            </footer>
        </div>
    );
}

export default Footer;