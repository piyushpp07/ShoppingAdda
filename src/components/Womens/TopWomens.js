import React, { useContext, useState, useEffect } from 'react'
import ItemCards from '../itemCard'
import { Container, Row, Col } from 'react-bootstrap'
import { StateContext } from '../../context/StateProvider';

export default function Topwomens() {
   const { womens } = useContext(StateContext)
   const [tm, setTm] = useState()
   const [dataWomens, setDataWomens] = womens;
   const [type, setType] = useState('productName')
   useEffect(() => {
      let womensTop = dataWomens.filter((e) => { return e.type === "wtop" });
      console.log(womensTop)
      setTm(womensTop)
   })
   const handelChange = (e) => {
      setType(e.target.value);
      console.log(type)
      switch (type) {
         case 'productName':
            setTm(tm.sort(dynamicSort("productName")))
            break;
         case 'price':
            setTm(tm.sort(dynamicSort("Price")))
            break;
         default: break;

      }
   }
   function dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === "-") {
         sortOrder = -1;
         property = property.substr(1);
      }
      return function (a, b) {
         /* next line works with strings and numbers, 
          * and you may want to customize it to your needs
          */
         var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
         return result * sortOrder;
      }
   }

   return (
      <div>

         < Container style={{ alignContent: 'center', marginLeft: '2em' }}>
            <h3 style={{ alignSelf: 'center' }}>Best Women's Topwear Collection</h3>
            <Row>
               <Col>
                  <h4>Sort By</h4>
                  <select className='dropdown' name='Sort By' onChange={handelChange}>
                     <option value="productName">Price</option>
                     <option value="price">Product Name</option>
                  </select>
               </Col>

            </Row>
            <Row fixed>
               {tm && tm.map((doc) =>
                  <Col xs={13} md={3}>
                     <ItemCards
                        key={doc.id}
                        id={doc.id}
                        productName={doc.productName}
                        image={doc.image}
                        price={doc.price}
                        oldPrice={doc.oldPrice}
                     />
                  </Col>
               )}
            </Row>
         </Container>
      </div>

   )
}