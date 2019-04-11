import React from 'react';

class Home extends React.Component {

    render() {

        return (
            <div>

                <div className="about-section bg-light">
                    <div className="container">
                        <div className="text-center">
                            <br />
                            <br />
                            <h1 className="site-title">About Us</h1>
                            <p> I'M A WEDDING, LIFESTYLE AND FASHION PHOTOGRAPHER FOCUSING ON NATURAL LIGHT </p>
                        </div>
                        <div className="about-inner-section">
                            <div className="col-md-6 about-inner-column">
                                <h3> Photography is an immediate rection, drawing is a meditation  </h3>
                                <p>I shoot on a digital camera and I like to combine several styles in a photo in order to save the most sincere and emotional moments and tell your story in the most beautiful and unique way. Fortunately, thanks to my work, my borders have expanded and I shoot in different countries. It is very inspiring.</p>

                                <ul>
                                    <li>Donec ut quam lscele volutri.</li>
                                    <li>Etiam volutpatbh quam bortis.</li>
                                    <li>Varius fusce vit aeblandit.</li>
                                </ul>

                            </div>
                            <div className="col-md-6 about-right">
                                <img src="https://format-com-cld-res.cloudinary.com/image/private/s--vL6VlPt9--/c_crop,h_1193,w_1793,x_0,y_0/c_fill,g_center,h_506,w_760/a_auto,fl_keep_iptc.progressive,q_95/v1/592c7a54a00716b2d08aa92b43ffda57/16020-1015895-DSC_0114.jpg" alt="hii " />
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;