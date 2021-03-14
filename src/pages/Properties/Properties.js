import {useEffect, useState} from "react";
import {deleteProperty, getAllProperties} from "../../api/property";
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import PropertyTable from "./PropertiesTable";

const useStyles = makeStyles(() =>({
    text: {
        fontFamily: 'Nunito',
        fontWeight: "bold",
        color: '#3591ED',
    },
}))
const Properties = () => {
    const classes = useStyles();
    const [properties, setProperties] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadAllProperties();
    }, [])

    const loadAllProperties = () => {
        setIsLoading(true);
        getAllProperties()
            .then(response => {
                setProperties(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const handleDeleteClick = (id) => {
        setIsLoading(true);
        deleteProperty(id)
            .then(() => {
                loadAllProperties();
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <Container component="main">
            <Container container justify="center">
                <Grid item xs={12} align="center" >
                    <Typography component="h1" variant="h5" className={classes.text}>All Properties</Typography>
                </Grid>
                <Grid item xs={12}>
                    {
                        isLoading ?
                            (
                                <div className="spinner-border" role="status">
                                    <h1>Is Loading</h1>
                                </div>
                            ) :
                            <PropertyTable
                                properties={properties}
                                handleDeleteClick={handleDeleteClick}
                            />

                    }
                </Grid>
            </Container>
        </Container>
    );
}

export default Properties;

