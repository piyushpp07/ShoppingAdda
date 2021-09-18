import React, { useState, useEffect, useContext } from 'react';
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
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { StateContext } from '../../context/StateProvider';
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
    const { wish } = useContext(StateContext)
    const [dataWishlist, setDataWishlist] = wish
    const [docs, setDocs] = useState([]);
    const ide = props.user.uid;
    let total = 0, save = 0;
    useEffect(() => {
        database.collection('users').doc(ide).collection('wish').onSnapshot((a) => {
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
        await database.collection('users').doc(ide).collection('wish').doc(id).delete().then(() => {
            tote()
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
    const addtoCart = (doc) => {
        if (ide) {
            database.collection("users").doc(props.uid).collection("wish").add({
                doc
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
        }
        else {
            toast.warn("Please Login First")
        }

    }
    function tote() {
        database.collection('users').doc(ide).collection('wish').onSnapshot((a) => {
            a.forEach((item) => {
                total = total + Number(item.data().price)
                save = save + Number(item.data().oldPrice - item.data().price)
            })
            setSave(save)
            setTot(total)
        })
    }
    if (docs.length === 0)
        return (
            <img src={`https://i.pinimg.com/originals/fa/90/cd/fa90cdab2a780306d0c350964c81e391.png`} alt="Logo" style={{ width: '100%', height: '30em' }} />
        )
    else if (docs !== null)
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
                                            <LocalMallIcon onClick={() => addtoCart(doc)} />
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

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid >
        )

}

























// import React, { useState, useEffect } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import { Favorite, LocalMall, Star } from "@material-ui/icons";
// import { database } from '../../firebase'
// import CartItem from './CartItem';
// export default function Mens(props) {

//     const [docs, setDocs] = useState([]);



//     const id = props.user.uid
//     useEffect(() => {
//         const getDataFromFirebase = [];
//         const subscriber = database.
//             collection('users').
//             doc(id).
//             collection("cart").
//             onSnapshot((querySnapshot) => {
//                 querySnapshot.forEach((doc) => {
//                     getDataFromFirebase.push({ ...doc.data(), key: doc.id });
//                 });
//                 setDocs(getDataFromFirebase);
//             });
//         return () => subscriber();
//     })

//     return (
//         <div>
//             < Container style={{ alignItem: 'center', justifyContent: "center" }}>
//                 {console.log(docs)}

//                 <Row fixed>
//                     <h3>Cart   </h3>
//                     {docs && docs.map((doc) =>
//                         <Col xs={14} md={7}>
//                             <CartItem
//                                 key={doc.id}
//                                 id={doc.id}
//                                 productName={doc.productName}
//                                 image={doc.image}
//                                 price={doc.price}
//                             />
//                         </Col>
//                     )}
//                 </Row>
//             </Container>

//         </div>

//     )
// }
