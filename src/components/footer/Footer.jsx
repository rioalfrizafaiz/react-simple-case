import React from 'react';


import './Footer.css';

function Footer(){
    return(
        <section className="footer">{/*Wadah Footer*/}

            <hr className="footer-separator"/>

            <section className="footer-top">{/**Top Footer */}
                <a href="https://www.linkedin.com/in/muhammad-farhan-rosal/">LinkedIn</a>
            </section>

            <section className="footer-bottom">{/**Bottom Footer */}
                <section className="footer-left">{/**Left Footer */}
                    <section>{/**Left Footer Info 1*/}
                        Left Footer Info 1
                    </section>
                    <section>{/**Left Footer Info 2*/}
                        Left Footer Info 2
                    </section>
                    <section>{/**Left Footer Info 3*/}
                        Left Footer Info 3
                    </section>

                </section>

                <section className="footer-center">{/**Center Footer */}
                    <section>{/**Center Footer Info 1*/}
                        Center Footer Info 1
                    </section>
                    <section>{/**Center Footer Info 1*/}
                        Center Footer Info 2
                    </section>
                    <section>{/**Center Footer Info 1*/}
                        Center Footer Info 3
                    </section>
                </section>

                <section className="footer-right">{/**Right Footer */}
                    <section>{/**Right Footer Info 1*/}
                        Right Footer Info 1
                    </section>
                    <section>{/**Right Footer Info 1*/}
                        Right Footer Info 2
                    </section>
                    <section>{/**Right Footer Info 1*/}
                        Right Footer Info 3
                    </section>

                </section>

            </section>
        </section>
    )
}

export default Footer;