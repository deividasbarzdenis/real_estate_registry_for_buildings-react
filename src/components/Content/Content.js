import {Route, Switch} from "react-router-dom";
import {Container} from "@material-ui/core";
import LandingPage from "../../pages/LandingPage/LandingPage";
import About from "../../pages/About/About";
import Properties from "../../pages/Properties/Properties";
import Property from "../../pages/Property/Property";
import NewProperty from "../../pages/Property/NewProperty";

const Content = () => {
    return (
        <Container component="main" >
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
                <Route exact path="/properties">
                    <Properties/>
                </Route>
                <Route path="/properties/:id">
                    <Property/>
                </Route>
                <Route exact path="/property/form">
                    <NewProperty/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Container>
    );
}

export default Content;