import {CardMedia, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import about from '../../assets/pexels-tirachard-kumtanom-347141.jpg';

const useStyles = makeStyles(() =>({
    text: {
        fontWeight: "bold",
        color: '#3591ED',
        fontFamily: 'Nunito',
        marginBottom: '20px',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        backgroundImage: `url(${process.env.PUBLIC_URL + about})`
    },
}))

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div>
            <Container component="main">
                <Container container justify="center">
                    <Grid item xs={12} align="center">
                        <Typography component="h1" variant="h5" className={classes.text}>Add Property Easily</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <CardMedia
                            className={classes.cardMedia}
                            title="Image title"
                        />
                    </Grid>
                </Container>
            </Container>
        </div>
    );
}

export default LandingPage;

