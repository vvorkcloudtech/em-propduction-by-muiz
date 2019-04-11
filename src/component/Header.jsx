import React from 'react';

class Header extends React.Component {

    render() {

        return (
            <div>


                <header>
                    <div className="overlay"></div>
                    <video muted="muted" loop="loop" autoPlay>
                        <source src="img/Fashion.mp4" type="video/mp4" />
                        <source src="img/Fashion.ogg" type="video/ogg" />                        
                    </video>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <h1 className="display-3 text-white"> EM Production </h1>
                                <h2 className="text-white"> My Work is my Identity </h2>
                            </div>
                        </div>
                    </div>
                </header>


            </div>
        );
    }
}

export default Header;

