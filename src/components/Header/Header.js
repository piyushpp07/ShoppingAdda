import React, { useState, useEffect, useContext } from 'react';
import { AppBar, Button, IconButton, List, ListItem, Tab, Tabs, Typography, Badge } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';


import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu'
import { ListItemText } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { LocalMallOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import { auth } from '../../firebase'
import { useHistory } from 'react-router';
import HeaderV from './HeaderV';
import { StateContext } from '../../context/StateProvider'



function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '0.2em'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1em'
        }
    },
    logo: {
        height: 20,
        marginLeft: '5em',
        [theme.breakpoints.down('md')]: {
            height: 20
        },
        [theme.breakpoints.down('xs')]: {
            height: 20
        }

    },
    logoContainer: {
        marginLeft: '4em',
        marginRight: '4em',
        marginTop: '0.5em',
        padding: 0,
        "&:hover": {
            backgroundColor: 'transparent'
        },
        [theme.breakpoints.down('md')]: {
            marginRight: '5em',
            marginLeft: '1em'
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '4em',
            marginLeft: '2em'
        }

    },
    tabContainer: {
        marginRight: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'

    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '50px',
        height: '45px',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    // menu:{
    //     backgroundColor:theme.palette.common.blue,
    //     color:'white',
    //     borderRadius:'0'
    // },
    // menuItem:{
    //     ...theme.typography.tab,
    //     opacity:'0.7',
    //     '&:hover':{
    //         opacity:'1'
    //     }
    //},
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIcon: {
        height: '50px',
        width: '50px',
        color: 'black',

    },
    drawerIconContainer: {
        marginLeft: 'auto',

        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    drawer: {
        backgroundColor: 'white',
        width: '15em'
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'black',
        opacity: 1
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: 'orange'
        }
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1

        }
    },
    appBar: {
        zIndex: theme.zIndex.modal,
        borderBottomColor: "#171717",
        backgroundColor: '#FEFEFE',
        borderBottom: "1px solid rgba(0,0,0,.2)",
        elevation: '120px'
    },
    searchIcon: {
        padding: theme.spacing(0, 0.2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: "1px solid black",
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.common.white,
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'black',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));



export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory('');
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [search, setSearch] = useState("");
    const [openDrawer, setOpenDrawer] = useState(false)

    const { cart, wish } = useContext(StateContext);
    const [dataCart] = cart;
    const [dataWishlist] = wish;

    const handelSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?name=${search}`);
        setSearch("")
    }
    const handleChange = (e, newValue) => {
        props.setValue(newValue);
    }


    const routes = [
        { name: 'MEN', link: '/Mens', activeIndex: 0 },
        { name: 'WOMEN', link: '/Womens', activeIndex: 1, },
        { name: 'MOBILE COVER', link: '/cover', activeIndex: 2 },
    ];
    const routesH = [
        { name: 'Men', link: '/Mens', activeIndex: 0 },
        { name: 'Women', link: '/Womens', activeIndex: 1, },
        { name: 'Mobile Cover', link: '/cover', activeIndex: 2 },
    ];

    const routesV = [
        { name: 'My Account', link: '/account', activeIndex: 4 },
        { name: 'My Order', link: '/Myorder', activeIndex: 5, },
        { name: 'My Wallet', link: '/mywallet', activeIndex: 6 },
        { name: 'My Wishlist', link: '/Wishlist', activeIndex: 7 },
        { name: 'Cart', link: '/Cart', activeIndex: 8 },
    ];
    useEffect(() => {
        [...routes, ...routesV, ...routesH].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case '/login':
                    props.setValue(3);
                    break;
                default:
                    break;
            }
        }
        )
    })

    const tabs = (
        <React.Fragment>
            <Tabs
                className={classes.tabContainer}
                value={props.value}
                onChange={handleChange}
                indicatorColor='#EFEFEF'
            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                    />
                ))}
            </Tabs>
            <div className={classes.search}>
                <form onSubmit={(e) => handelSubmit(e)}>
                    <div className={classes.searchIcon}>
                        <Button>  <SearchIcon /> </Button>
                    </div>
                    <InputBase
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        value={search}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </form>

            </div>
            {/* <Button 
            // variant='contained' 
            // color='secondary' 
            // className={classes.button}
            style={{color:"black"}}
            component={Link} 
            to='/login'
            onClick={()=>props.setValue(5)}
            user={props.user} 
        > */}

            {props.user ? <>
                <HeaderV user={props.user} />
            </>
                : <Button
                    // variant='contained' 
                    // color='secondary' 
                    // className={classes.button}
                    style={{ color: "black" }}
                    component={Link}
                    to='/Login'
                    onClick={() => props.setValue(5)}
                >
                    <Typography style={{
                        fontFamily: 'Raleway',
                        textTransform: 'none',
                        fontWeight: 700,
                        fontSize: '1.3rem',
                        color: '#171717'
                    }}
                    >
                        Login
                    </Typography>
                </Button>
            }
            <Button component={Link} to='/Wishlist' onClick={() => props.setValue(8)} >
                <FavoriteBorderOutlined style={{ color: dataWishlist.length ? '#FF0000' : 'black' }} />
            </Button>
            <Button style={{ marginRight: '10em' }} component={Link} to='/cart' onClick={() => props.setValue(8)}>
                <Badge badgeContent={dataCart.length} color="error">
                    <LocalMallOutlined style={{ color: 'black' }} />
                </Badge>
            </Button>
        </React.Fragment>

    );
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding >
                    {props.user ? <ListItem style={{ backgroundColor: '#d9dadb' }}>
                        <ListItemText >
                            <Typography variant='h3' style={{
                                fontSize: '1.5rem', fontFamily: 'Allan',
                                textTransform: 'none',
                                color: 'black',
                                fontWeight: 500
                            }} align='left'
                            >
                                Hello,{" "}
                                <span >{props.user.displayName}</span>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                        :
                        <ListItem button>
                            <ListItemText onClick={() => {
                                setOpenDrawer(false);
                                history.push('/login')
                            }}>
                                <Typography style={{ color: 'black', fontFamily: 'Raleway', fontWeight: 700 }}>
                                    Login/Sign Up
                                </Typography>
                            </ListItemText>
                        </ListItem>

                    }


                    <ListItem>
                        <ListItemText >
                            <Typography variant='body1' style={{ color: 'rgba(0,0,0,.3)', fontWeight: 500 }}>
                                Shop In
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    {routesH.map(route => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            divider
                            button
                            component={Link}
                            to={route.link}
                            selected={props.value === route.activeIndex}
                            classes={{ selected: classes.drawerItemSelected }}
                            onClick={() => {
                                setOpenDrawer(false);
                                props.setValue(route.activeIndex)
                            }}
                        >
                            <ListItemText disableTypography
                                className={classes.drawerItem}
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    {props.user ?
                        <React.Fragment>
                            <ListItem>
                                <ListItemText >
                                    <Typography variant='body1' style={{ color: 'rgba(0,0,0,.3)', fontWeight: 500 }}>
                                        My Profile
                                    </Typography>
                                </ListItemText>
                            </ListItem>

                            {routesV.map(route => (
                                <ListItem
                                    key={`${route}${route.activeIndex}`}
                                    divider
                                    button
                                    component={Link}
                                    to={route.link}
                                    selected={props.value === route.activeIndex}
                                    classes={{ selected: classes.drawerItemSelected }}
                                    onClick={() => {
                                        setOpenDrawer(false);
                                        props.setValue(route.activeIndex)
                                    }}
                                >
                                    <ListItemText disableTypography
                                        className={classes.drawerItem}
                                    >
                                        {route.name}
                                    </ListItemText>
                                </ListItem>
                            ))}
                            <ListItem
                                divider
                                button
                                component={Link}
                                to='/estimate'
                                classes={{
                                    root: classes.drawerItemEstimate,
                                    selected: classes.drawerItemSelected
                                }}
                                onClick={() => {
                                    auth.signOut()
                                    setOpenDrawer(false);
                                    props.setValue(9)
                                }}
                                selected={props.value === 9}
                            >
                                <ListItemText
                                    className={classes.drawerItem}
                                    disableTypography
                                >
                                    Logout
                                </ListItemText>
                            </ListItem>
                        </React.Fragment>
                        : null
                    }
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple

            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );


    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoContainer}
                            component={Link}
                            to='/'
                            onClick={() => props.setValue(0)}
                            disableRipple
                        >
                            <h5 style={{ fontStyle: 'oblique', alignContent: 'center', fontFamily: 'cursive', justifyContent: 'center', fontWeight: 'bold' }}>ShoppingAdda</h5>
                        </Button>

                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}