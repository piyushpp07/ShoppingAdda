import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TopWear from './Adds/TopWear';

import BottomWear from './Adds/BottomWear';
export default function Home() {

    return (
        <div>

            < Container style={{ width: "100%" }}>
                <Row fixed>
                    <Col xs={13} md={4}>
                        <Image src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-winter-store-online-fashion-shopping-720-banner-1609849948.jpg'} thumbnail />
                    </Col>
                    <Col xs={13} md={4}>
                        <Image src="https://images.bewakoof.com/uploads/grid/app/bewakoof-cover-parade-mobile-cover-online-fashion-shopping-720-banner-1609849946.jpg" thumbnail />
                    </Col>
                    <Col xs={13} md={4}>
                        <Image src="https://images.bewakoof.com/uploads/grid/app/18th-Dec-Homepage-DOTD-1608282108.jpg" thumbnail />
                    </Col>

                </Row>
                <Image src="https://images.bewakoof.com/uploads/grid/app/bewakoof-top-title-card-online-shopping-DESKTOP-1603117869.jpg" style={{ width: '100%' }} />
                <TopWear />
                <Image src="https://images.bewakoof.com/uploads/grid/app/bewakoof-top-title-card-online-shopping-DESKTOP-BOTTOMWEAR-1603117870.jpg" style={{ width: '100%' }} />
                <BottomWear />
                <Image src="https://images.bewakoof.com/uploads/grid/app/bewakoof-oof-sale-desktop-strip-1603097557.jpg" style={{ width: '100%' }} />
            </Container>


        </div >

    )
}
