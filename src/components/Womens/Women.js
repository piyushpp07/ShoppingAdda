import React from 'react'
import ItemCards from '../itemCard'
import { Container, Row, Col } from 'react-bootstrap'
import GetDataW from '../getDataW';
export default function Womens() {
    const { docs } = GetDataW("Womens");
    return (
        <div>

            < Container style={{ alignContent: 'center' }}>
                <h3 style={{ alignSelf: 'center' }}>Best Women's Collection</h3>
                <Row fixed>
                    {docs && docs.map((doc) =>
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
