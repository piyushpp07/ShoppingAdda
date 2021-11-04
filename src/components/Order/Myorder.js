import React, { useContext } from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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


   const { oder, ototal, osave, addr } = useContext(StateContext);
   const [dataOrder] = oder;
   const [orderTotal] = ototal;
   const [orderSave] = osave;
   const [add] = addr;

   return (

      <div>
         <Grid item container direction='row' justifyContent='center'>
            <Grid item lg={4}>


               <h2>My Orders</h2>
               {
                  add[0] !== undefined ? <>

                     <Row style={styles.top}>
                        <Col sm={8}><h4>Deliver To:{add[0].name} </h4></Col>
                        <Col><h4>Phone No :{add[0].phone}</h4> </Col>
                        <Col sm={4}><h4>Address : {add[0].address} {add[0].city} {add[0].pincode}</h4></Col>

                     </Row></> : <></>
               }


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
                           <Typography variant="subtitle3" style={{ color: 'green' }}>
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
               <Container style={{ borderRadius: '1em', borderWidth: '2em' }}>
                  <Row>
                     <Col> <h4>Order Total : ₹{orderTotal}</h4></Col>
                     <Col> <h5 style={{ color: 'green' }}>Total Saved : ₹{orderSave}</h5></Col>
                  </Row>
               </Container>

            </Grid>
         </Grid>
      </div >
   )
}

const styles = {
   top: {
      marginTop: '3em',
      marginBottom: '3em',
      marginLeft: '0.2em'
   }
}

export default Myorder;
