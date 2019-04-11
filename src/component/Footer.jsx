import React from 'react';

class Footer extends React.Component {

    render() {

        return (
            <div>

                <footer className="page-footer font-small bg-light unique-color-dark">

                    <div className="container text-center text-md-left mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h3 className="text-uppercase font-weight-bold">ELM Production</h3>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                                <p>I'M A WEDDING, LIFESTYLE AND FASHION PHOTOGRAPHER FOCUSING ON NATURAL LIGHT.</p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h4 className="text-uppercase font-weight-bold">Main Products</h4>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                    <a href="">Photography</a>
                                </p>
                                <p>
                                    <a href="">VideoGraphy</a>
                                </p>
                                <p>
                                    <a href="">Web Developing</a>
                                </p>
                                <p>
                                    <a href="">Web Hosting</a>
                                </p>

                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h4 className="text-uppercase font-weight-bold">Extra Products</h4>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                    <a href="">Uniform</a>
                                </p>
                                <p>
                                    <a href="">Books</a>
                                </p>
                                <p>
                                    <a href="">Id Cards</a>
                                </p>
                                <p>
                                    <a href="">Management</a>
                                </p>

                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h4 className="text-uppercase font-weight-bold">Contact</h4>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                                <p>
                                    <i className="fa fa-home mr-3"></i> IT Tower, Lahore</p>
                                <p>
                                    <i className="fa fa-envelope mr-3"></i>muizzbilal@gmail.com</p>
                                <p>
                                    <i className="fa fa-phone mr-3"></i> +92 32 41 04 98 12</p>
                                <p>
                                    <i className="fa fa-phone mr-3"></i> +92 32 44 11 22 71</p>

                            </div>

                        </div>
                    </div>
                    <div className="footer-copyright text-center bg-dark py-3">© 2019 Copyright:
                         <a href=""> E M Production</a>
                    </div>

                </footer>



            </div>
        );
    }
}

export default Footer;