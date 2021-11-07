import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
export default function Cursol() {
    let history = useHistory();
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={2000}>
                <img
                    onClick={() => { history.push("/Mens") }}
                    className="d-block w-100"
                    src='https://images.bewakoof.com/uploads/grid/app/DesktopStrip-TriBe-1606924612.jpg'
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    onClick={() => { history.push("/Womens") }}
                    className="d-block w-100"
                    src='https://images.bewakoof.com/uploads/grid/app/bewakoof-shirt-and-kurta-online-fashion-shopping-DESKTOP-STRIP-1603893838.jpg'
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    onClick={() => { history.push("/Bottom") }}
                    className="d-block w-100"
                    src='https://images.bewakoof.com/uploads/grid/app/bewakoof-mobile-cover-parade-shopping-banner-desktop-strip-1606294605.jpg'
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}