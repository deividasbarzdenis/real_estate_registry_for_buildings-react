import {
    Button,
    Container,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    table: {
        minWidth: 500,
    },
    head: {
        fontWeight: "bold",
    },
    topTable: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }
}));
const PropertyTable = ({properties, handleDeleteClick}) => {
    const classes = useStyles();
    return (
        <Container component="main">
            <TableContainer component={Paper} className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead className={classes.topTable}>
                        <TableRow >
                            <TableCell align="center" className={classes.head}>Id</TableCell>
                            <TableCell align="center" className={classes.head}>Description</TableCell>
                            <TableCell align="center" className={classes.head}>City</TableCell>
                            <TableCell align="center" className={classes.head}>Street</TableCell>
                            <TableCell align="center" className={classes.head}>House Number</TableCell>
                            <TableCell align="center" className={classes.head}>Area m*2</TableCell>
                            <TableCell align="center" className={classes.head}>Value, Eur.</TableCell>
                            <TableCell align="center" className={classes.head}>Value with Tax, Eur.</TableCell>
                            <TableCell align="center" className={classes.head}>Type</TableCell>
                            <TableCell align="center" className={classes.head}/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            properties.map(rec => (
                                <TableRow key={rec.id} hover>
                                    <TableCell align="center">{rec.id}</TableCell>
                                    <TableCell align="center">{rec.description}</TableCell>
                                    <TableCell align="center">{rec.city}</TableCell>
                                    <TableCell align="center">{rec.street}</TableCell>
                                    <TableCell align="center">{rec.houseNumber}</TableCell>
                                    <TableCell align="center">{rec.area}</TableCell>
                                    <TableCell align="center">{rec.value}</TableCell>
                                    <TableCell align="center">{rec.valueWithTax}</TableCell>
                                    <TableCell align="center">{rec.type}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            size="small"
                                            onClick={() => handleDeleteClick(rec.id)}
                                        >Delete</Button>
                                    </TableCell >
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default PropertyTable;

