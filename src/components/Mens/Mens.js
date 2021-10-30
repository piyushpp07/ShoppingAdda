import React, { useContext, useState } from 'react'
import ItemCards from '../itemCard'
import { Container, Row, Col } from 'react-bootstrap'

import { StateContext } from '../../context/StateProvider'

export default function Mens() {
    const { mens } = useContext(StateContext)
    const [dataMens, setDataMens] = mens;
    const [sorted, setSorted] = useState([])
    const handelChange = () => { }
    return (
        <div>

            < Container style={{ alignItem: 'center', justifyContent: "center" }}>
                <h3>Men's Clothing </h3>
                <select className='dropdown' name='colValue' onChange={handelChange}>
                    <option value="price">Sort By</option>
                    <option value="productName">Please Select</option>

                </select>
                <Row fixed>
                    {dataMens && dataMens.map((doc) =>
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
