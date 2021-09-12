import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
export default function BottomWear() {
    return (
        <div>
            <Row fixed>

                <Col xs={6} md={2}>
                    <Image src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-winter-store-online-fashion-shopping-720-banner-1609849948.jpg'} thumbnail />
                </Col>
                <Col xs={6} md={2}>
                    <Image src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-winter-store-online-fashion-shopping-720-banner-1609849948.jpg'} thumbnail />
                </Col>  <Col xs={6} md={2}>
                    <Image src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-winter-store-online-fashion-shopping-720-banner-1609849948.jpg'} thumbnail />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="https://images.bewakoof.com/uploads/grid/app/bewakoof-cover-parade-mobile-cover-online-fashion-shopping-720-banner-1609849946.jpg" thumbnail />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="https://images.bewakoof.com/uploads/grid/app/bewakoof-cover-parade-mobile-cover-online-fashion-shopping-720-banner-1609849946.jpg" thumbnail />
                </Col>
                <Col xs={6} md={2}>
                    <Image src="https://images.bewakoof.com/uploads/grid/app/18th-Dec-Homepage-DOTD-1608282108.jpg" thumbnail />
                </Col>

            </Row>
        </div>
    )
}