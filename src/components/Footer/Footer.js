import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div style={{ top: '0%' }}>
            <footer className="section-footer bg-secondary">
                <div className="container" >
                    <section className="footer-top padding-y-lg text-white">
                        <div className="row">
                            <aside className="col-md col-6">
                                <h6 className="title">Brands</h6>
                                <ul className="list-unstyled">
                                    <li> <Link to="/Contactus">Adidas</Link></li>
                                    <li> <Link to="">Puma</Link></li>
                                    <li> <Link to="">Reebok</Link></li>
                                    <li> <Link to="">Nike</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title">Company</h6>
                                <ul className="list-unstyled">
                                    <li> <Link to="">About us</Link></li>
                                    <li> <Link to="">Career</Link></li>
                                    <li> <Link to="">Find Link store</Link></li>
                                    <li> <Link to="">Rules and terms</Link></li>
                                    <li> <Link to="">Sitemap</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title">Help</h6>
                                <ul className="list-unstyled">
                                    <li> <Link to="">Contact us</Link></li>
                                    <li> <Link to="">Money refund</Link></li>
                                    <li> <Link to="">Order status</Link></li>
                                    <li> <Link to="">Shipping info</Link></li>
                                    <li> <Link to="">Open dispute</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-md col-6">
                                <h6 className="title">Account</h6>
                                <ul className="list-unstyled">

                                    <li> <Link to=""> My Orders </Link></li>
                                </ul>
                            </aside>
                            <aside className="col-md">
                                <h6 className="title">Social</h6>
                                <ul className="list-unstyled">
                                    <li><Link to=""> <i className="fab fa-facebook"></i> Facebook </Link></li>
                                    <li><Link to=""> <i className="fab fa-twitter"></i> Twitter </Link></li>
                                    <li><Link to=""> <i className="fab fa-instagram"></i> Instagram </Link></li>
                                    <li><Link to=""> <i className="fab fa-youtube"></i> Youtube </Link></li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    <section className="footer-bottom text-center">


                        <p className="text-muted"> &copy; 2021 Shoppers Adda, All rights reserved </p>
                        <br />
                    </section>
                </div>
            </footer>
        </div>
    )
}
