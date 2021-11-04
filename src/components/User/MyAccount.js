import React, { useContext } from 'react'
import { StateContext } from '../../context/StateProvider'
import { auth } from '../../firebase';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
function MyAccount(props) {
   const { ototal, osave, cartsave, carttotal, addr, wishsave, wishtotal } =
      useContext(StateContext);
   const [cartSave] = cartsave;
   const [cartTotal] = carttotal;
   const [wishSave] = wishsave;
   const [wishTotal] = wishtotal;

   const [orderTotal] = ototal;
   const [orderSave] = osave;
   const [add] = addr;
   return (
      <div style={{ alignItems: 'center' }}>

         <Container>
            {console.log(add)}
            <h1>Account Details     <Image style={{ width: '50px' }} src="https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg" roundedCircle /></h1>
            <Row style={styles.top} >

               <Col sm={8} xs={10} md={4}>
                  <Image style={{ width: '200px', height: '200px' }} src="https://i.pinimg.com/474x/2e/06/82/2e06823d793c4a666b3afd5aae09b0e4.jpg" roundedCircle />
               </Col>

            </Row>
            <Row style={styles.top}>
               <Col sm={8}><h3>Hello! {props.user.displayName}</h3></Col>
               <Col sm={4}><h4>Your Email :{props.user.email}</h4></Col>

            </Row>
            {
               add[0] !== undefined ? <>
                  <h2>Address Details</h2>

                  <Row style={styles.top}>
                     <Col sm={8}><h5>Phone No :{add[0].phone}</h5></Col>
                     <Col sm={4}><h5>Address : {add[0].address} {add[0].city} {add[0].pincode}</h5></Col>

                  </Row></> : <></>
            }
            <h2>Cart Details</h2>
            <Row style={styles.top}>
               <Col sm={8}><h5>Cart Total :{cartTotal}</h5></Col>
               <Col sm><h5>Saved In Cart :{cartSave}</h5></Col>
            </Row>
            <h2>Wishlist Details</h2>
            <Row style={styles.top}>
               <Col sm={8}><h5>Wishlist Total :{wishTotal}</h5></Col>
               <Col sm><h5>Saved In Wishlist :{wishSave}</h5></Col>
            </Row>
            <h2>Orders Details</h2>
            <Row style={styles.top}>
               <Col sm={8}><h5>Orders Total :{orderTotal}</h5></Col>
               <Col sm><h5>Saved In Order :{orderSave}</h5></Col>
            </Row>
            <Row>
               <Col>   </Col>
               <Col><Button onClick={() => { auth.signOut() }} style={{ backgroundColor: 'red', marginBottom: '3em', marginLeft: '1 em' }}>Logout</Button></Col>
               <Col>   </Col>
            </Row>
         </Container>

      </div >
   )
}


const styles = {
   top: {
      marginTop: '3em',
      marginBottom: '3em'
   }
}

export default MyAccount
