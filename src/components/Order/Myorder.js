import React, { useContext } from 'react'
import { Grid, makeStyles, Typography, useTheme, useMediaQuery, Button, TextField, Dialog, DialogContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import { StateContext } from '../../context/StateProvider';
import { Container, Row, Col } from 'react-bootstrap'


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



function Myorder() {
   const classes = useStyles();
   const theme = useTheme();


   const { oder, ototal, osave } = useContext(StateContext);
   const [dataOrder] = oder;
   const [orderTotal] = ototal;
   const [orderSave] = osave;


   return (

      <div>
         <Grid item container direction='row' justifyContent='center'>
            <Grid item lg={4}>


               <h2>My Orders</h2>



               {dataOrder && dataOrder.map((doc, i) =>
                  <Card className={classes.root} style={{ marginBottom: '2em' }}>
                     <div className={classes.details}>
                        <CardContent className={classes.content}>
                           <Typography component="h5" variant="h5">
                              {doc.productName}
                           </Typography>
                           <Typography variant="subtitle1" color="textSecondary">
                              ₹{doc.price}
                           </Typography>
                           <Typography variant="subtitle1" style={{ color: 'green' }}>
                              You saved ₹{doc.oldPrice - doc.price}!
                           </Typography>
                        </CardContent>
                        <div className={classes.controls}>

                        </div>
                     </div>
                     <CardMedia
                        className={classes.cover}
                        image={doc.image}
                        title="Live from space album cover"
                     />

                  </Card>
               )
               }
               <h3>Order Total : {orderTotal}</h3>
               <h3>Order Save : {orderSave}</h3>
               <h2>Item Will Be Deliverd To</h2>


               {
                  dataOrder.length === 0 ? (<></>) :
                     (
                        <>
                           {
                              dataOrder.map((data, i) => {
                                 <Container>
                                    {i === 0 && data.address[0].address ? (<>
                                       <h2>Address Details</h2>
                                       <Row >
                                          <Col sm={8}><h5>Phone No :{data.address[0].phone}</h5></Col>
                                          <Col sm={4}><h5>Address : {data.address[0].address} {data.address.city} {data.address.pincode}</h5></Col>
                                       </Row>
                                    </>) :
                                       (<></>)
                                    }
                                 </Container>

                              })
                           }
                        </>
                     )
               }
            </Grid>
         </Grid>
      </div >
   )
}

export default Myorder
