import React from 'react';
import Prenav from './Pre-nav';

class Navbar extends React.Component {

    render() {
        return (
            
                <div>

                <Prenav />

                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                            <div className="container">
                                <a className="navbar-brand" href="index.html"><img src="https://t4.ftcdn.net/jpg/01/16/00/29/500_F_116002914_dKeYp5UZ48M2Rp2wywSE3JFhbl48Ijpm.jpg" width="80px" height="80px" /></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link nav-home" id="nav-home" href=""> Home </a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link nav-home" id="nav-about" href=""> About </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link nav-addmission" id="nav-addmission" href="">Service</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link nav-gallery" id="nav-gallery" href="">Package
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link nav-gallery" id="nav-corner" href="">Gallery
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link nav-gallery" id="nav-corner" href="">Team
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link nav-gallery" id="nav-corner" href="">Testominals
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link nav-contact" id="nav-contact" href="">Contact Us
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>

                    </div>

                </div>
                );
            }
        }
        
export default Navbar;