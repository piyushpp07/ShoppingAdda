import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Cursol() {
    return (
        <Carousel fade={true} pause={false} variant={'dark'} style={{ zIndex: '100' }}>
            <Carousel.Item interval={2000}>
                <img style={{ zIndex: '100' }}
                    className="d-block w-100"
                    src='https://images.bewakoof.com/uploads/grid/app/DesktopStrip-TriBe-1606924612.jpg'
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img style={{ zIndex: '100' }}
                    className="d-block w-100"
                    src='https://images.bewakoof.com/uploads/grid/app/bewakoof-shirt-and-kurta-online-fashion-shopping-DESKTOP-STRIP-1603893838.jpg'
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img style={{ zIndex: '100' }}
                    className="d-block w-100"
                    src='https://images.bewakoof.com/uploads/grid/app/bewakoof-mobile-cover-parade-shopping-banner-desktop-strip-1606294605.jpg'
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}