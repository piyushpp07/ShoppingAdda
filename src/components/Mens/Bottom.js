import React, { useContext, useState, useEffect } from 'react'
import ItemCards from '../itemCard'
import { Container, Row, Col } from 'react-bootstrap'
import { StateContext } from '../../context/StateProvider'

export default function Bottomwomens() {
   const { mens } = useContext(StateContext)
   const [dataMens] = mens;
   const [tm, setTm] = useState()
   const [type, setType] = useState('price')
   let mensTop;
   useEffect(() => {
      mensTop = dataMens.filter((e) => { return e.type === "menb" });
      console.log(mensTop)
      setTm(mensTop)
   })
   const handelChange = (e) => {
      setType(e.target.value);
      console.log(type)
      switch (type) {
         case 'productName':
            setTm(tm.sort(dynamicSort("productName")))
            break;
         case 'price':
            setTm(tm.sort(dynamicSort("price")))
            break;
         default:
            setTm(tm.sort(dynamicSort("price")))
      }
   }
   function dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === "-") {
         sortOrder = -1;
         property = property.substr(1);
      }
      return function (a, b) {
         var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
         return result * sortOrder;
      }
   }
   return (
      <div>

         < Container style={{ alignItem: 'center', justifyContent: "center", marginLeft: '2em' }}>
            <h3>Men's Best BottomWear Clothing </h3>
            <Row>
               <Col>
                  <h4>Sort By</h4>
                  <select className='dropdown' name='colValue' onChange={handelChange}>
                     <option disabled selected value="null"> Sort By</option>
                     <option value="productName">Price</option>
                     <option value="price">Product Name</option>
                  </select>
               </Col>

            </Row>
            {console.log(tm)}

            <Row fixed>
               {tm && tm.map((doc) =>
                  <Col xs={13} md={3}>
                     <ItemCards
                        id={doc.id}
                        productName={doc.productName}
                        image={doc.image}
                        price={doc.price}
                        oldPrice={doc.oldPrice}
                        desc={doc.desc}
                     />
                  </Col>
               )}
            </Row>
         </Container>
      </div>
   )
}
