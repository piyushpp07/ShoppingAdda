import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap'
import { Grid, makeStyles, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { database } from '../../firebase'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        paddingTop: '2em',
        paddingBottom: '10em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
            paddingTop: '1em',
        }
    },
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        marginLeft: 'auto'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}))

export default function Cart(props) {
    //material ui components
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();

    //hooks
    const [tot, setTot] = useState(0)
    const [sav, setSave] = useState(0)
    const [docs, setDocs] = useState([]);
    const ide = props.user.uid;
    let total = 0, save = 0;
    useEffect(() => {
        database.collection('users').doc(ide).collection('cart').onSnapshot((a) => {
            const fdata = [];
            a.forEach((item) => {
                fdata.push({ ...item.data(), key: item.id })

            })
            setDocs(fdata)
            tote()
        })
        console.log(docs)
    }, [props])
    //deletion fuction
    const deleteItem = async (id, e) => {
        await database.collection('users').doc(ide).collection('cart').doc(id).delete().then(() => { tote() })
    }
    function tote() {
        database.collection('users').doc(ide).collection('cart').onSnapshot((a) => {
            a.forEach((item) => {
                total = total + Number(item.data().price)
                save = save + Number(item.data().oldPrice - item.data().price)
            })
            setSave(save)
            setTot(total)
        })
    }



    return (
        <Grid Container direction={matchesSM ? 'column' : ' row'} alignItems='center' className={classes.rowContainer}>
            <Grid item container direction='row' justifyContent='center'  >
                <Grid item lg="4">
                    {docs.map((doc) =>
                        <Card className={classes.root} style={{ marginBottom: '2em' }}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        {doc.productName}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        orignal price ₹ {doc.oldPrice}
                                    </Typography>
                                    <Typography variant="subtitle1" style={{ color: 'green' }}>
                                        Offer Price ₹ {doc.price}
                                    </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    <IconButton >
                                        <DeleteIcon onClick={() => deleteItem(doc.key)} />
                                    </IconButton>
                                    <ToastContainer />
                                    <IconButton >
                                        <FavoriteIcon />
                                    </IconButton>
                                </div>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image={doc.image}
                                title="Live from space album cover"
                            />
                        </Card>
                    )}


                </Grid>
                <br />
                <Grid item lg={5} sm={8} xs={7} style={{ marginLeft: matchesSM ? 0 : '10em' }} alignItems='center'  >
                    <Card style={{ backgroundColor: '#F6F6F7' }}>
                        <CardContent>
                            <Typography style={{ backgroundColor: '#F6F6F7', color: 'black', fontFamily: "cursive", borderBottom: 'solid ' }}>
                                Subtotal
                            </Typography>
                            <br />
                            <Typography style={{ color: 'black', fontFamily: "fantasy" }}>
                                The total Price is ₹{tot}
                            </Typography>
                            <Typography style={{ color: 'black', fontFamily: "fantasy" }}>
                                You Saved ₹{sav}
                            </Typography>
                            <br />
                            <Button>
                                Pay Now
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid >
    )
}