import React, { useContext, useState } from 'react'
import ItemCards from '../itemCard'
import { Container, Row, Col } from 'react-bootstrap'

import { StateContext } from '../../context/StateProvider'

export default function Mens() {
    const { mens } = useContext(StateContext)
    const [dataMens, setDataMens] = mens;
    const [type, setType] = useState('price')
    const handelChange = (e) => {
        setType(e.target.value);

        switch (type) {
            case 'productName':
                setDataMens(dataMens.sort(dynamicSort("productName")))
                break;
            case 'price':
                setDataMens(dataMens.sort(dynamicSort("price")))
                break;
            default:
                setDataMens(dataMens.sort(dynamicSort("price")))
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

            < Container style={{ alignItem: 'center', justifyContent: "center", marginLeft: '2em' }}>
                <h3>Men's Clothing </h3>
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

                <Row fixed>
                    {dataMens && dataMens.map((doc) =>
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
