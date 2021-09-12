import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
export default function TopWear() {
    return (
        <div>
            <Row fixed>

                <Col xs={6} md={2}>
                    <Image src={'https://images.bewakoof.com/uploads/grid/app/Women-s-T-shirts--1--1591788299.png'} thumbnail />
                </Col>
                <Col xs={6} md={2}>
                    <Image src={'https://images.bewakoof.com/uploads/grid/app/Women-s-34th-Sleeves--1--1591788297.png'} thumbnail />
                </Col>  <Col xs={6} md={2}>
                    <Image src={'https://images.bewakoof.com/uploads/grid/app/Men-s-T-shirts-1591361055.png'} thumbnail />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="https://images.bewakoof.com/uploads/grid/app/Men-s-Colorblock-1591361054.png" thumbnail />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="https://images.bewakoof.com/uploads/grid/app/Women-s-Crop-Tops--1--1591788298.png" thumbnail />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="https://images.bewakoof.com/uploads/grid/app/Men-s-Shirts-1591361055.png" thumbnail />
                </Col>

            </Row>
        </div>
    )
}
