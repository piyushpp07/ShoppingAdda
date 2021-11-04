import React, { useState, useContext, useEffect } from 'react';
import { database } from '../../firebase';
import styled from "styled-components";
import { Grid, makeStyles, Typography, useTheme, useMediaQuery, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Form } from 'react-bootstrap'
import { StateContext } from '../../context/StateProvider';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
const useStyles = makeStyles(theme => ({
   rowContainer: {
      paddingLeft: '4em',
      paddingRight: '4em',
      paddingTop: '2em',
      paddingBottom: '10em',
      [theme.breakpoints.down('md')]: {
         paddingLeft: '1.5em',
         paddingRight: '1.5em',
      },
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
   esitmate: {
      ...theme.typography.estimate,
      fontSize: '1.5rem',
      backgroundColor: theme.palette.common.orange,
      borderRadius: 50,
      height: 80,
      width: 205,
      marginRight: '5em',
      marginLeft: '2em',
      '&:hover': {
         backgroundColor: theme.palette.secondary.light
      },
      [theme.breakpoints.down("md")]: {
         marginLeft: 0,
         marginRight: 0
      }
   },
   learnButton: {
      ...theme.typography.learnButton,
      fontSize: "0.7rem",
      height: 35,
      padding: 5,
      [theme.breakpoints.down("md")]: {
         marginBottom: "2em"
      }
   },
   message: {
      border: `2px solid ${theme.palette.common.black}`,
      marginTop: '5em',
      borderRadius: 5
   },
   sendButton: {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 45,
      width: 245,
      fontSize: '1rem',
      backgroundColor: theme.palette.common.black,
      "&:hover": {
         backgroundColor: theme.palette.common.black.light
      },
      [theme.breakpoints.down("sm")]: {
         height: 40,
         width: 225,
      }
   }

}))
export default function Checkout() {
   const classes = useStyles();
   const theme = useTheme();


   const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
   const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

   //Context 
   const { cart, userdata, cartsave, carttotal } = useContext(StateContext);
   const [dataCart] = cart;
   const [user] = userdata;
   const [cartSave] = cartsave;
   const [cartTotal, setcartTotal] = carttotal;
   //State 
   const [address, setAddress] = useState([])
   const [value, setValue] = useState()
   const ide = user;
   const [amount, setAmount] = useState()


   async function handleToken(token) {
      const response = await axios.post(
         "https://localhost:5000/checkout",
         { token, amount, address }
      );
      const { status } = response.data;
      console.log("Response:", response.data);
      setcartTotal(0);
      if (status === "success") {
         console.log("Success! Check email for details", { type: "success" });
         const addtoOrder = () => {
            dataCart.map((item) => {
               database.collection("users").doc(user).collection("order").add({
                  price: item.price,
                  productName: item.productName,
                  desc: item.productName,
                  image: item.image,
                  address: address
               })
            });
         }
         const deleteCart = () => {
            dataCart.map((item) => {
               database.collection("users").doc(user).collection("cart").doc(item.key).delete().then((res) => { console.log(res) })
            })
         }
      } else {
         console.log("Something went wrong", { type: "error" });
      }
   }
   const pod = () => {
      dataCart.map((item) => {
         database.collection("users").doc(user).collection("order").add({
            price: item.price,
            productName: item.productName,
            desc: item.productName,
            image: item.image,
            address: address,
            oldPrice: item.oldPrice
         })
      });
      dataCart.map((item) => {
         database.collection("users").doc(user).collection("cart").doc(item.key).delete().then((res) => { console.log(res) })
      })

   }

   // Address FEtch
   useEffect(() => {
      const getAddress = [];
      database.collection('users').doc(ide).collection('shipping').onSnapshot((querySnapshot) => {
         querySnapshot.forEach((doc) => {
            getAddress.push({ ...doc.data(), key: doc.id });
         });
         setAddress(getAddress);
         setAmount(cartTotal)
      });
   }, [ide])



   const OriginalPrice = styled.span`
    text-decoration: line-through;
    font-size: 15px;
    font-weight: 100;
    color: #7e818c;
    padding: 0 0.2rem;
    `;



   return (
      <div>

         <Grid Container direction={matchesSM ? 'column' : ' row'} alignItems='center' className={classes.rowContainer}>
            <Grid item container direction='row' justifyContent='center'>
               <Grid item lg={4}>
                  {/* first Item */}
                  {dataCart && dataCart.map(doc =>
                     <Card className={classes.root} style={{ marginBottom: '2em' }}>
                        <div className={classes.details}>
                           <CardContent className={classes.content}>
                              <Typography component="h5" variant="h5">
                                 {doc.productName}
                              </Typography>
                              <Typography variant="subtitle1" color="textSecondary">
                                 ₹{doc.price}
                                 <OriginalPrice id="price">{doc.oldPrice}</OriginalPrice>
                              </Typography>
                              <Typography variant="subtitle1" style={{ color: 'green' }}>
                                 You saved ₹{doc.oldPrice - doc.price}!
                              </Typography>
                           </CardContent>

                        </div>
                        <CardMedia
                           className={classes.cover}
                           image={doc.image}
                           title="Live from space album cover"
                        />
                     </Card>
                  )
                  }
               </Grid>
               <Grid item lg={5} sm={8} xs={7} style={{ marginLeft: matchesMD ? 0 : '8em' }} alignItems='center'  >
                  <Card style={{ backgroundColor: '#F6F6F7' }}>
                     <CardContent>
                        <Typography style={{ backgroundColor: '#F6F6F7', color: 'black', fontFamily: "cursive", borderBottom: 'solid ' }}>
                           Shipping Address
                        </Typography>
                        <Typography style={{ backgroundColor: '#F6F6F7', color: 'black', fontFamily: "cursive", borderBottom: 'solid ' }}>
                           {address.map(d =>
                              <div>
                                 Locality: {d.address}
                                 <br />
                                 City:{d.city}
                                 <br />
                                 Pincode:{d.pincode}
                              </div>
                           )}
                        </Typography>

                        <Typography style={{ backgroundColor: '#F6F6F7', color: 'black', fontFamily: "cursive", borderBottom: 'solid ' }}>
                           Subtotal
                        </Typography>
                        <br />
                        <Typography style={{ color: 'black', fontFamily: "fantasy" }}>
                           The total Price is ₹{cartTotal}
                        </Typography>
                        <Typography style={{ color: 'black', fontFamily: "fantasy" }}>
                           You Saved ₹{cartSave}
                        </Typography>
                        <br />
                        <Form>
                           <Form.Select aria-label="Default select example" value={value} onChange={(e) => { const s = e.target.value; setValue(s) }}>
                              <option disabled selected>Payment Method </option>
                              <option value="Pay On Delivery">Pay On Delivery</option>
                              <option value="Pay With Card">Pay With Card</option>
                           </Form.Select>
                           <br />
                        </Form>
                        {
                           value === "Pay With Card" ?
                              <>
                                 <StripeCheckout stripeKey='pk_test_51JObFKSAm54TGSWjZQQVnpytQbBKaz7MqR7ewLtoeqZSsO9SZUl7n3ZZm3zEYV3sYmQnZaVbzZCttT3in6KJTxKS00lJalhL2a'
                                    token={handleToken}
                                    amount={cartTotal * 100}
                                    name="Payment"
                                 />
                              </> :
                              <Button
                                 style={{ borderColor: 'black', backgroundColor: 'red', color: 'white', borderRadius: '4px', padding: '0px 12px', fontSize: '14px', height: '30px', fontWeight: 'bold' }}
                                 onClick={() => { pod() }}>
                                 Confirm Order</Button>
                        }
                     </CardContent>
                  </Card>
               </Grid>
            </Grid>
         </Grid>
      </div >


   )
}