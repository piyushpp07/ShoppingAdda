import React, { useContext } from 'react'
import ItemCards from '../itemCard'
import { Container, Row, Col } from 'react-bootstrap'
import { StateContext } from '../../context/StateProvider';
export default function Womens() {
   const { mens, womens } = useContext(StateContext)
   const [dataWomens, setDataWomens] = womens;
   return (
      <div>

         < Container style={{ alignContent: 'center' }}>
            <h3 style={{ alignSelf: 'center' }}>Best Women's Collection</h3>
            <Row fixed>
               {dataWomens && dataWomens.map((doc) =>
                  <Col xs={5} md={4}>
                     <ItemCards
                        key={doc.id}
                        id={doc.id}
                        productName={doc.productName}
                        image={doc.image}
                        price={doc.Price}
                        oldPrice={doc.oldPrice}
                     />
                  </Col>
               )}
            </Row>
         </Container>
      </div>

   )
}