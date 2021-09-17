import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../../firebase'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2)
    },
    vk: {
        color: 'black',
        backgroundColor: 'white',
        marginTop: '1.3em',
        width: '20em'
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    rowContainer: {
        paddingLeft: '1em',
        paddingRight: '2em',
    },
    menuItem: {
        opacity: 0.7,
        fontFamily: 'Raleway',
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '1.3rem',
        color: 'black',
        "&:hover": {
            opacity: 1
        }
    },
}));

export default function HeaderV(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <AccountCircleIcon />
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper className={classes.vk}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
                                        <MenuItem className={classes.rowContainer} style={{ backgroundColor: '#d9dadb', marginTop: '-0.5em' }}
                                        >
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
                                        </MenuItem>
                                        <MenuItem component={Link} to='/Myaccount'>My Account</MenuItem>
                                        <MenuItem onClick={handleClose} className={classes.menuItem}>My Wishlist</MenuItem>
                                        <MenuItem onClick={handleClose} className={classes.menuItem}>My Orders</MenuItem>
                                        <MenuItem onClick={handleClose} className={classes.menuItem}>My Wallet</MenuItem>
                                        <MenuItem onClick={() => {
                                            auth.signOut()
                                        }} className={classes.menuItem}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}