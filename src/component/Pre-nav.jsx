import React from 'react';

class App extends React.Component {

    render() {

        return (
            <div>
                <div className="w3-bar w3-black w3-hide-small">
                 <div className="container">
                 <a href="#" className="w3-bar-item w3-button float-right"><i className="fa fa-facebook-official"></i></a>
                    <a href="#" className="w3-bar-item w3-button float-right"><i className="fa fa-instagram"></i></a>
                    <a href="#" className="w3-bar-item w3-button float-right"><i className="fa fa-twitter"></i></a>
                    <a href="#" className="w3-bar-item w3-button w3-right"><i className="fa fa-shopping-cart"></i></a>
                 </div>
                </div>
            </div>
        );
    }
}

export default App;
