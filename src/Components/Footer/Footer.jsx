import React from "react";
import "./Footer.css";

function Footer(){
    return (
        <div className="footer">
            <div className="container">
                <h2>Contact</h2>
                <div className="row">
                    <div className="col col-lg-4 col-12 col-sm-12">
                        <h5>About</h5>
                        <ul>
                            <li>How yourBroker works</li>
                            <li>Investors</li>
                            <li>Careers</li>
                            <li>Founder's Letter</li>
                        </ul>

                    </div>
                    <div className="col col-lg-4 col-12 col-sm-12">
                    <h5>Services</h5>
                        <ul>
                            <li>Rent Home</li>
                            <li>Sale Home</li>
                            {/* <li>Careers</li>
                            <li>Founder's Letter</li> */}
                        </ul>
                    </div>

                    <div className="col col-lg-4 col-12 col-sm-12">
                    <h5>Support</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>Trust & Safety</li>
                            <li>Community Centre</li>
                            
                        </ul>
                    </div>

                </div>
                <div className="copyright">
                        <p>© Copyright : Akshay Patel</p>
                </div>

            </div>

        </div>
    )
}

export default Footer;