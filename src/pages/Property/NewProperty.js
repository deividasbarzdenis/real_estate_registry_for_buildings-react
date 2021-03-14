import {Field, FieldArray, Form, Formik} from "formik"
import * as yup from "yup";
import DomainIcon from '@material-ui/icons/Domain';
import {Avatar, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {useHistory} from "react-router";
import {addProperty} from "../../api/property";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginBottom: '20px',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 2, 0),
    },
}));
const ownersYup = yup.object({
    username: yup.string().required("Username is required"),
    name: yup.string().required("Name is required"),
    lastname: yup.string().required("Lastname is required"),
    email: yup.string().required("Email is required"),
    phone: yup.string().required("Phone is required"),
})

const validationSchema = yup.object().shape({
    year: yup.date().required("Date is required"),
    description: yup.string().required("Description is required"),
    street: yup.string().required("Street is required"),
    houseNumber: yup.string().required("House number  is required"),
    city: yup.string().required("City is required"),
    region: yup.string().required("Region is required"),
    zipCode: yup.string().required("ZipCode is required"),
    owners: yup.array().of(ownersYup).min(1, 'Must have at least one owner'),
    area: yup.number().positive("Must be positive").required("area time is required"),
    value: yup.number().positive("Must be positive").required("Region time is required"),
    type: yup.string().required("Region time is required"),
})

const NewProperty = () => {
    const classes = useStyles();
    const history = useHistory();

    const submitForm = (formValues, formikHelpers) => {
        // debugger --> skirtas debug narsykles konsoleje.
        formikHelpers.setSubmitting(true);
        addProperty(formValues)
            .then(() => {
                history.push("/");
            })
            .finally(() => {
                formikHelpers.setSubmitting(false);
            })
    }

    return (
        <>
            <Formik
                initialValues={{
                    year: '',
                    description: '',
                    street: '',
                    houseNumber: '',
                    city: '',
                    region: '',
                    zipCode: '',
                    owners: [{
                        username: '',
                        name: '',
                        lastname: '',
                        email: '',
                        phone: '',
                    }],
                    area: '',
                    value: '',
                    type: '',

                }}
                onSubmit={submitForm}
                validationSchema={validationSchema}
            >
                {(props) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        setFieldValue,
                        isSubmitting,
                    } = props
                    return (
                        <>
                            {/*<PropsState {...props}/>*/}
                            <Container component="main" maxWidth="sm" className={classes.wrapper}>
                                <CssBaseline/>
                                <div className={classes.paper}>
                                    <Avatar className={classes.avatar}>
                                        <DomainIcon/>
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        New Property
                                    </Typography>
                                </div>
                                <Form className={classes.form}>
                                    <Grid container
                                          spacing={2}
                                          alignItems="center"
                                          justify="center">
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                className={classes.text}
                                                id='description'
                                                label='Description'
                                                type="text"
                                                value={values.description}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.description ? errors.description : ""}
                                                error={touched.description && Boolean(errors.description)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id="year"
                                                label="Year"
                                                type="date"
                                                className={classes.text}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                value={values.year}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.year ? errors.year : ""}
                                                error={touched.year && Boolean(errors.year)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={classes.text}
                                                id='street'
                                                label='Street'
                                                type="text"
                                                value={values.street}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.street ? errors.street : ""}
                                                error={touched.street && Boolean(errors.street)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                className={classes.text}
                                                id='houseNumber'
                                                label='House number'
                                                type="text"
                                                value={values.houseNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.houseNumber ? errors.houseNumber : ""}
                                                error={touched.houseNumber && Boolean(errors.houseNumber)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                className={classes.text}
                                                id='city'
                                                label='City'
                                                type="text"
                                                value={values.city}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.city ? errors.city : ""}
                                                error={touched.city && Boolean(errors.city)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                className={classes.text}
                                                id='region'
                                                label='Region'
                                                type="text"
                                                value={values.region}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.region ? errors.region : ""}
                                                error={touched.region && Boolean(errors.region)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                className={classes.text}
                                                id='zipCode'
                                                label='Zip code'
                                                type="text"
                                                value={values.zipCode}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.zipCode ? errors.zipCode : ""}
                                                error={touched.zipCode && Boolean(errors.zipCode)}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FieldArray
                                                name="ingredientDTO"
                                                render={arrayHelpers => (

                                                    <Grid container
                                                          spacing={1}>
                                                        {values.owners.map((owner, index) => (
                                                            <div key={index}>
                                                                <Grid
                                                                    container
                                                                    spacing={2}
                                                                    alignItems="center"
                                                                >
                                                                    <Grid item xs={6} sm={4}>
                                                                        <TextField
                                                                            className={classes.text}
                                                                            id='username'
                                                                            label='Username'
                                                                            type='text'
                                                                            value={values.username}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            helperText={touched.username ? errors.username : ""}
                                                                            error={touched.username && Boolean(errors.username)}
                                                                            fullWidth
                                                                            autoFocus
                                                                            name={`owners[${index}].username`}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={6} sm={4}>
                                                                        <TextField
                                                                            className={classes.text}
                                                                            id='email'
                                                                            label='Email'
                                                                            type='text'
                                                                            value={values.email}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            helperText={touched.email ? errors.email : ""}
                                                                            error={touched.email && Boolean(errors.email)}
                                                                            fullWidth
                                                                            autoFocus
                                                                            name={`owners[${index}].email`}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={6} sm={4}>
                                                                        <TextField
                                                                            className={classes.text}
                                                                            id='phone'
                                                                            label='Phone'
                                                                            type='text'
                                                                            value={values.phone}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            helperText={touched.phone ? errors.phone : ""}
                                                                            error={touched.phone && Boolean(errors.phone)}
                                                                            fullWidth
                                                                            autoFocus
                                                                            name={`owners[${index}].phone`}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6}>
                                                                        <TextField
                                                                            className={classes.text}
                                                                            id='name'
                                                                            label='Name'
                                                                            type='text'
                                                                            value={values.name}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            helperText={touched.name ? errors.name : ""}
                                                                            error={touched.name && Boolean(errors.name)}
                                                                            fullWidth
                                                                            autoFocus
                                                                            name={`owners[${index}].name`}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} sm={6}>
                                                                        <TextField
                                                                            className={classes.text}
                                                                            id='lastname'
                                                                            label='Lastname'
                                                                            type='text'
                                                                            value={values.lastname}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            helperText={touched.lastname ? errors.lastname : ""}
                                                                            error={touched.lastname && Boolean(errors.lastname)}
                                                                            fullWidth
                                                                            autoFocus
                                                                            name={`owners[${index}].lastname`}
                                                                        />
                                                                    </Grid>

                                                                    <Grid item xs={12}>
                                                                        <Button
                                                                            fullWidth
                                                                            margin="normal"
                                                                            type="button"
                                                                            color="secondary"
                                                                            variant="outlined"
                                                                            onClick={() => arrayHelpers.remove(index)}>
                                                                            REMOVE
                                                                        </Button>
                                                                    </Grid>
                                                                </Grid>
                                                            </div>
                                                        ))}
                                                        <Grid item xs={12}>
                                                            <Button
                                                                fullWidth
                                                                margin="normal"
                                                                type="button"
                                                                color="secondary"
                                                                variant="outlined"
                                                                onClick={() => arrayHelpers
                                                                    .push({
                                                                        username: '',
                                                                        email: '',
                                                                        phone: '',
                                                                        name: '',
                                                                        lastname: '',

                                                                    })}
                                                            >
                                                                Add
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                className={classes.text}
                                                id='area'
                                                label='Area - square meters'
                                                type="number"
                                                value={values.area}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.area ? errors.area : ""}
                                                error={touched.area && Boolean(errors.area)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                className={classes.text}
                                                id='value'
                                                label='Value - Eur.'
                                                type="number"
                                                value={values.value}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.value ? errors.value : ""}
                                                error={touched.value && Boolean(errors.value)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                className={classes.text}
                                                id='type'
                                                label='Type of building'
                                                type="text"
                                                value={values.type}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.type ? errors.type : ""}
                                                error={touched.type && Boolean(errors.type)}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                                disabled={isSubmitting}
                                                fullWidth
                                            >
                                                SUBMIT
                                            </Button>
                                        </Grid>

                                    </Grid>
                                </Form>
                            </Container>
                        </>
                    )
                }}
            </Formik>

        </>
    );
}


export default NewProperty;

