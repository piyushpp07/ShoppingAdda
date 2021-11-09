import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    Col,
    Container,
    Row,
    ListGroup,
    Form,
    InputGroup,
    Image,
} from "react-bootstrap";
import {
    Facebook,
    Instagram,
    Twitter,
    Pinterest,
    Apple,
    History,
} from "@material-ui/icons";

export default function Footer() {
    const DevInfo = styled.div`
  background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  padding: 1rem;
  div {
    max-width: 1280px;
    margin: 0px auto;
    width: 90%;
    text-align: center;
  }
  h5 {
    color: #1b1b1b;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }
  .neon {
    color: #fb4264;
    font-size: 16px;
    text-shadow: 0 0 3px #f40a35;
    animation: neon 1s ease infinite;
    -moz-animation: neon 1s ease infinite;
    -webkit-animation: neon 1s ease infinite;
    @keyframes neon {
      0%,
      100% {
        text-shadow: 0 0 2px #fa1c16, 0 0 3px #fa1c16, 0 0 10px #fa1c16,
          0 0 10px #fa1c16, 0 0 1px #fed128, 1px 1.2px 1px #806914;
        color: #fed128;
      }
      50% {
        text-shadow: 0 0 3px #800e0b, 0 0 1.5px #800e0b, 0 0 5px #800e0b,
          0 0 5px #800e0b, 0 0 0.2px #800e0b, 0.4px 1px 1px #40340a;
        color: #806914;
      }
    }
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

    // Footer Section
    const Devstyle = styled.div`
  padding: 4% 12% 2% 11%;
  background-color: #181818;
  color: #ffff;
  a {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-weight: 500;
    vertical-align: baseline;
    background: transparent;
    color: #ffff;
    outline: none;
    &:hover {
      color: #ffff;
      text-decoration: none;
    }
  }
  .col-md-3,
  .col-sm-6 {
    padding: 8px 10px;
  }
  .list-group {
    background-color: transparent;
    color: #ffff;
    border: none;
  }
`;

    const Ul = styled.ul`
  list-style-type: none;
  margin-bottom: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
`;

    const Heading = styled.h5`
  color: #fdb827;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  display: block;
`;

    const Emailinput = styled.input`
  background: transparent;
  border: 0;
  border-bottom-style: solid;
  color: #ffff;
  width: 55%;
  border-color: #fdb827;
  border-bottom-width: 1px;
  &:focus {
    outline: 0;
  }
`;

    const BUTTON = styled.button`
  border: none;
  background-color: #fdb827;
  padding: 0.3rem 0.8rem;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
`;
    return (
        <Container fluid style={{ padding: "0", paddingTop: "5rem" }}>
            <Devstyle>
                <section>
                    <Row>
                        <Col sm={6} md={3}>
                            <Heading>CUSTOMER SERVICE</Heading>
                            <ListGroup>
                                <Ul>
                                    <Link to="/">Contact Us</Link>
                                </Ul>
                                <Ul>
                                    <Link to="/">Track Order</Link>
                                </Ul>
                                <Ul>
                                    <Link to="/">Return Order</Link>
                                </Ul>
                                <Ul>
                                    <Link to="/">Cancel Order</Link>
                                </Ul>
                            </ListGroup>
                        </Col>
                        <Col sm={6} md={3}>
                            <Heading>COMPANY</Heading>
                            <ListGroup>
                                <Ul>
                                    <Link to="/">About Us</Link>
                                </Ul>
                                <Ul>
                                    <Link to="/">We're Hiring</Link>
                                </Ul>
                                <Ul>
                                    <Link to="/">Terms and Condtions</Link>
                                </Ul>
                                <Ul>
                                    <Link to="/">Privacy Policy</Link>
                                </Ul>
                                <Ul>
                                    <Link to="/">Blog</Link>
                                </Ul>
                            </ListGroup>
                        </Col>
                        {/* check */}
                        <Col sm={6} md={3}>
                            <Heading>CONNECT WITH US</Heading>
                            <ListGroup>
                                <Ul>
                                    <Link to="/">
                                        <Facebook /> 4.7M People Like us
                                    </Link>
                                </Ul>
                                <Ul>
                                    <Link to="/">
                                        <Instagram /> 1M Followers
                                    </Link>
                                </Ul>
                                <Ul>
                                    &nbsp;
                                    <Link to="/">
                                        <Twitter />
                                    </Link>
                                    &nbsp;
                                    <Link to="">
                                        <Pinterest />
                                    </Link>
                                    &nbsp;
                                    <Link to="/">
                                        <Apple />
                                    </Link>
                                </Ul>
                            </ListGroup>
                        </Col>

                        <Col sm={6} md={3}>
                            <Heading style={{ paddingBottom: "1rem" }}>
                                KEEP UP TO DATE
                            </Heading>
                            <ListGroup>
                                <Ul>
                                    <Form inline>
                                        <InputGroup>
                                            <Emailinput placeholder="Enter Mail Id" />
                                            <InputGroup>
                                                <BUTTON type="submit">SUBSCRIBE</BUTTON>
                                            </InputGroup>
                                        </InputGroup>
                                    </Form>
                                </Ul>
                            </ListGroup>
                        </Col>

                    </Row>
                </section>
                <section style={{ paddingTop: "4rem" }}>
                    <Row>
                        <Col sm={6} md={3}>
                            <Heading>CUSTOMER SERVICE</Heading>
                            <ListGroup>
                                <Ul>
                                    <small>
                                        <History fontSize="small" />
                                    </small>
                                    <Link style={{ paddingLeft: "5px" }} to="/">
                                        <big>15 Days Return Policy</big>
                                    </Link>
                                </Ul>
                                <Ul style={{ display: "flex" }}>
                                    &nbsp;<h5>₹</h5>
                                    <Link style={{ paddingLeft: "5px" }} to="/">
                                        &nbsp; <big> Cash On Delivery</big>
                                    </Link>
                                </Ul>
                            </ListGroup>
                        </Col>
                        <Col sm={6} md={3}>
                            <Heading>DOWNLOAD THE APP</Heading>
                            <ListGroup>
                                <Ul>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ paddingRight: ".5rem" }}
                                        href="https://drive.google.com/file/d/16_LVV9kJo9pFijqJfIn7Fc_A-ZuSpOGh/view?usp=sharing"
                                    >
                                        <Image
                                            width="100px"
                                            src="https://images.bewakoof.com/web/app_android_v1.png"
                                            alt="sbjb"
                                            thumbnail
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://drive.google.com/file/d/16_LVV9kJo9pFijqJfIn7Fc_A-ZuSpOGh/view?usp=sharing"
                                    >
                                        <Image
                                            width="100px"
                                            src="https://images.bewakoof.com/web/app_ios_v1.png"
                                            alt="sbjb"
                                            thumbnail
                                        />
                                    </a>
                                </Ul>
                            </ListGroup>
                        </Col>
                        <Col style={{ padding: "8px 10px" }} sm={12} md={6}>
                            <Heading>100% Secure Connection</Heading>
                            <Ul>
                                <Image
                                    width="300px"
                                    src="https://images.bewakoof.com/web/secure-payments-image.png"
                                    alt="sbjb"
                                    fluid
                                />
                            </Ul>
                        </Col>
                    </Row>
                </section>
            </Devstyle>
            <DevInfo>
                <div>
                    <h5>
                        © All rights are reserved  | Source on{" "}
                        <a
                            className="neon"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/piyushpp07/ShoppingAdda"
                        >
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 14 14"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#000"
                                    d="M6 1q1.633 0 3.012.805t2.184 2.184.805 3.012q0 1.961-1.145 3.527t-2.957 2.168q-.211.039-.312-.055t-.102-.234l.004-.598q.004-.575.004-1.051 0-.758-.406-1.109.445-.047.801-.141t.734-.305.633-.52.414-.82.16-1.176q0-.93-.617-1.609.289-.711-.062-1.594-.219-.07-.633.086t-.719.344l-.297.187q-.727-.203-1.5-.203t-1.5.203q-.125-.086-.332-.211t-.652-.301-.664-.105q-.352.883-.062 1.594-.617.68-.617 1.609 0 .664.16 1.172t.41.82.629.523.734.305.801.141q-.305.281-.383.805-.164.078-.352.117t-.445.039-.512-.168-.434-.488q-.148-.25-.379-.406t-.387-.187l-.156-.023q-.164 0-.227.035t-.039.09.07.109.102.094l.055.039q.172.078.34.297t.246.398l.078.18q.102.297.344.48t.523.234.543.055.434-.027l.18-.031q0 .297.004.691t.004.426q0 .141-.102.234t-.312.055q-1.812-.602-2.957-2.168T.001 7.001q0-1.633.805-3.012T2.99 1.805 6.002 1zM2.273 9.617q.023-.055-.055-.094-.078-.023-.102.016-.023.055.055.094.07.047.102-.016zm.243.266q.055-.039-.016-.125-.078-.07-.125-.023-.055.039.016.125.078.078.125.023zm.234.351q.07-.055 0-.148-.062-.102-.133-.047-.07.039 0 .141t.133.055zm.328.328q.062-.062-.031-.148-.094-.094-.156-.023-.07.062.031.148.094.094.156.023zm.445.196q.023-.086-.102-.125-.117-.031-.148.055t.102.117q.117.047.148-.047zm.493.039q0-.102-.133-.086-.125 0-.125.086 0 .102.133.086.125 0 .125-.086zm.453-.078q-.016-.086-.141-.07-.125.023-.109.117t.141.062.109-.109z"
                                ></path>
                            </svg>
                        </a>{" "}
                        | Made by{"  "}
                        <a
                            className="neon"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/piyush-paradkar-61a2a11b1/"
                        >
                            @piyush_paradkar
                        </a>
                    </h5>
                </div>
            </DevInfo>
        </Container>
    )
}
