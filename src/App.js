import {BrowserRouter as Router} from "react-router-dom";
import cover from './assets/cover.jpg'
import {CssBaseline, makeStyles} from "@material-ui/core";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}))

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Router>
                <Header/>
                <Content/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
