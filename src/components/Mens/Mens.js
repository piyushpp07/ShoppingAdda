import React from 'react'
import ItemCards from '../itemCard'
import { Container, Row, Col } from 'react-bootstrap'
import GetData from '../getData'
export default function Mens() {
    const { docs } = GetData("Mens");
    return (
        <div>

            < Container style={{ alignItem: 'center', justifyContent: "center" }}>
                <h3>Men's Clothing    </h3>
                <Row fixed>
                    {docs && docs.map((doc) =>
                        <Col xs={13} md={3}>
                            <ItemCards
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
