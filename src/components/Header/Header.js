import {
    AppBar,
    Button,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import SortIcon from "@material-ui/icons/Sort";

const menuItems = [
    {
        title: "Add Property",
        pageUrl: "/property/form"
    },
    {
        title: "Properties",
        pageUrl: "/properties"
    },
    {
        title: "About",
        pageUrl: "/about"
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        fontFamily: 'Nunito',

    },
    appBar: {
        background: 'none',
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appBarTitle: {
        flexGrow: '1',
        fontSize: '2.5rem',
        color: 'white',
        textDecoration: 'none'
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorTitle: {
        color: '#3591ED',
    },
    headerButtons: {
        color: "red"
    },
    menuButton: {
        '&:hover': {
            backgroundColor: 'rgba(215, 138, 248,  0.75)',
            color: '#795548',
        },
        '&:focus': {
            color: '#795548',
            backgroundColor: 'rgba(215, 138, 248,  0.75)',
        },

    },
    btColor: {
        fontFamily: 'Nunito',
        color: "#3591ED",
        fontSize: '0.95rem',
        '&:hover': {
            backgroundColor: 'rgba(215, 138, 248,  0.75)',
            color: '#795548',
        }
    },
    dropMenu: {
        color: "#795548",
    },
    dropMenuText: {
        color: "#795548",
    }
}))

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    }
    const handleMenuClick = () => {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <NavLink exact to="/" className={classes.appBarTitle} >
                        <h1 className={classes.appBarTitle} >Property
                            <span className={classes.colorTitle}>Registration</span>
                        </h1>
                    </NavLink>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <SortIcon className={classes.icon}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(({title, pageUrl}, index) => {
                                    // const {title, pageUrl} = item;
                                    return (
                                        <MenuItem className={classes.dropMenu} >
                                            <NavLink
                                                key={index}
                                                className={classes.dropMenuText}
                                                to={pageUrl}
                                                onClick={() => handleMenuClick()}>
                                                {title}</NavLink>
                                        </MenuItem>
                                    )
                                })}
                            </Menu>
                        </>
                    ) : (
                        <>
                            <div className={classes.headerButtons}>
                                {menuItems.map(({title, pageUrl}, index) => {
                                    return (
                                        <>
                                            <Button
                                                key={index}
                                                className={classes.btColor}
                                                component={NavLink}
                                                to={pageUrl}>
                                                {title}
                                            </Button>
                                        </>
                                    )
                                })}
                            </div>
                        </>
                    )}

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;

