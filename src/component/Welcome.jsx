import React from 'react';

class Home extends React.Component {

    render() {

        return (
            <div>
                <div className="about-section">
                    <div className="welcome section" id="welcome">
                        <div className="container">
                            <br />
                            <br />
                            <h1 className="site-title">Welcome</h1>
                            <div className="about-top w3ls-agile">
                                <div className="col-md-6 red">
                                    <img className="img-responsive" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/RfeyEzE/welcome-background-video-for-your-next-event_v3mivpftox__F0000.png" alt="" />
                                    <div className="welcome-img">
                                        <div className="col-md-6 col-xs-6 welcome-img1">
                                            <img className="img-responsive" src="https://www.adorama.com/alc/wp-content/uploads/2016/08/shutterstock_435927403.jpg" alt="" />
                                        </div>
                                        <div className="col-md-6 col-xs-6 welcome-img2">
                                            <img className="img-responsive" src="https://www.adorama.com/alc/wp-content/uploads/2016/08/shutterstock_435927403.jpg" alt="" />
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                                <div className="col-md-6 come">
                                    <div className=" welcome-grid">
                                        <h2>We provide service since
                                            <span>2018</span>
                                            with proud! 
                                        </h2>
                                        <p>Hi, I'm Muizz, and i'm a destination wedding photographer. Currently based in Barcelona and available for destination weddings.</p>
                                        <p>I love you to take pictures of people. I see a wedding photography. Weddings If you re looking at your wedding day. I like good stories. Let's talk, because this is where it all begins</p>
                                        <h3>Over the past year I have been taking pictures in </h3>
                                        <ul>
                                            <li><i className="fa fa-hand-o-right" aria-hidden="true"></i>    	Italy, Germany</li>
                                            <li><i className="fa fa-hand-o-right" aria-hidden="true"></i>		Poland, Lithuania</li>
                                            <li><i className="fa fa-hand-o-right" aria-hidden="true"></i>		Spain, Belarus, Russia</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;