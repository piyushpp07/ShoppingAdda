import React, { useContext } from 'react';
import { Grid, makeStyles, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { database } from '../../firebase'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { StateContext } from '../../context/StateProvider';
import { LocalMallRounded } from "@material-ui/icons";
import EmptyWish from '../../assets/EmptyWish.png'

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

export default function Wishlist(props) {
    //material ui components
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();



    //hooks

    const { wish, cart, userdata, wishsave, wishtotal } = useContext(StateContext);
    const [dataCart] = cart;
    const [dataWishlist] = wish;
    const [user] = userdata;
    const [wishSave] = wishsave;
    const [wishTotal] = wishtotal;
    const ide = user;


    // use Effect

    //deletion fuction
    const deleteItem = async (id, e) => {
        await database.collection('users').doc(ide).collection('wish').doc(id).delete().then(() => {

            toast("Product Deleted", {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }

    //Total WishList
    //Add to Cart Function 
    const addtoCart = (doc) => {
        let q = dataCart.filter(a => a.productName === doc.productName)
        if (ide) {
            if (q.length === 0) {
                database.collection("users").doc(ide).collection("cart").add({
                    productName: doc.productName,
                    image: doc.image,
                    price: doc.price,
                    oldPrice: doc.oldPrice
                }).then(() => {
                    toast("Item Added to Cart",
                        {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                })
                database.collection('users').doc(ide).collection('wish').doc(doc.key).delete()
            }
            else {
                toast("Already in Cart", {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }

        }
        else {
            toast.warn("Please Login First")
        }

    }




    //rendering 

    if (dataWishlist.length === 0)
        return (<>
            <img src={EmptyWish} alt="Logo" style={{ width: '100%', height: '35em' }} />
        </>)
    else
        return (
            <Grid Container direction={matchesSM ? 'column' : ' row'} alignItems='center' className={classes.rowContainer}>
                <Grid item container direction='row' justifyContent='center'  >
                    <Grid item lg="4">

                        {dataWishlist.map((doc) =>
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
                                            <LocalMallRounded onClick={() => { addtoCart(doc) }} />
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
                                    The total Price is ₹{wishTotal}
                                </Typography>
                                <Typography style={{ color: 'black', fontFamily: "fantasy" }}>
                                    You Saved ₹{wishSave}
                                </Typography>
                                <br />

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid >
        )

}