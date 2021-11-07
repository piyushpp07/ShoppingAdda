import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TopWear from './Adds/TopWear';
import Cursol from './Adds/Carousel'
import BottomWear from './Adds/BottomWear';
import { Hidden } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
export default function Home() {
    let history = useHistory();
    return (
        <div >
            < Container style={{ width: "100%" }}>
                <Cursol />
                <div style={{ marginTop: '2em' }}>
                    <Hidden smDown>
                        <Row fixed>

                            <Col xs={13} md={4}>
                                <Image onClick={() => { history.push("/Mens") }} src={'https://images.bewakoof.com/uploads/grid/app/bewakoof-winter-store-online-fashion-shopping-720-banner-1609849948.jpg'} thumbnail />
                            </Col>
                            <Col xs={13} md={4}>
                                <Image onClick={() => { history.push("/Womens") }} src="https://images.bewakoof.com/uploads/grid/app/bewakoof-cover-parade-mobile-cover-online-fashion-shopping-720-banner-1609849946.jpg" thumbnail />
                            </Col>
                            <Col xs={13} md={4}>
                                <Image onClick={() => { history.push("/Top") }} src="https://images.bewakoof.com/uploads/grid/app/18th-Dec-Homepage-DOTD-1608282108.jpg" thumbnail />
                            </Col>

                        </Row>
                    </Hidden>
                </div>
                <Image onClick={() => { history.push("/Mens") }} src="https://images.bewakoof.com/uploads/grid/app/bewakoof-top-title-card-online-shopping-DESKTOP-1603117869.jpg" style={{ width: '100%' }} />
                <TopWear />
                <Image onClick={() => { history.push("/Womens") }} src="https://images.bewakoof.com/uploads/grid/app/bewakoof-top-title-card-online-shopping-DESKTOP-BOTTOMWEAR-1603117870.jpg" style={{ width: '100%' }} />
                <BottomWear />
                <Image onClick={() => { history.push("/Top") }} src="https://images.bewakoof.com/uploads/grid/app/bewakoof-oof-sale-desktop-strip-1603097557.jpg" style={{ width: '100%' }} />
            </Container>


        </div >

    )
}
