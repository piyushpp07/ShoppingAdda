import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div style={{ top: '0%' }}>
            <footer className="section-footer bg-secondary">
                <div className="container" >
                    <section className="footer-top padding-y-lg text-white">
                        <div className="row">

                            <aside className="col-md">
                                <h6 className="title">Social</h6>
                                <ul className="list-unstyled">

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
