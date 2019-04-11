import React from 'react';

class Gallery extends React.Component{
    
    render(){
        
    $(document).ready(function(){

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
                $('.filter').show('1000');
            }
            else
            {
             $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
        });
        
        if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
    
    });

        return(
            <div>

                    
<div className="container">
        <div className="row">
        <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="site-title">Gallery </h1>
        </div>

        <div className="container" align="center">
            <button className="btn btn-default filter-button" data-filter="all">All</button>
            <button className="btn btn-default filter-button" data-filter="wed">Wedding</button>
            <button className="btn btn-default filter-button" data-filter="birth">Birthday</button>
            <button className="btn btn-default filter-button" data-filter="edu">Education</button>
            <button className="btn btn-default filter-button" data-filter="fashion">Fashion</button>
        </div>
        <br/>


<div className="row">
            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter wed">
                <img src="https://www.aprilmeachum.com/blog/wp-content/uploads/2017/08/Magnolia_-Plantation_Charleston_Wedding_Photographer_April_Meachum_0428-365x365.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter birth">
                <img src="http://www.unitariancongregation.org/ceremonies/wp-content/uploads/2016/05/WDF_1087001-365x365.jpeg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter wed">
                <img src="http://www.sameerscaterers.co.za/wp-content/uploads/2018/04/Crescent-Hall-23-365x365.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter fashion">
                <img src="http://weddingpakistani.com/wp-content/uploads/2012/03/reema.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter edu">
                <img src="https://mypathwaytocollege.com/wpress/wp-content/uploads/2018/03/college-students-365x365.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter fashion">
                <img src="http://wallpaperen.com/wp-content/uploads/2018/01/luxury-mahira-khan-latest-pics-mermaid-photoshoot-of-mahira-khan-for-divani-pakistan-mahira-khan-latest-pics.png" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter edu">
                <img src="https://www.iobm.edu.pk/wp-content/uploads/2017/08/DSC09970-365x365.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter fashion">
                <img src="http://www.msandersun.com/wp-content/uploads/2015/04/IMG_7258-e1430405583481-365x365.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter fashion">
                <img src="https://i.pinimg.com/originals/25/1d/66/251d6636a3a99b098c289ac2c606dc9a.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter wed">
                <img src="https://i.pinimg.com/originals/c6/bc/0b/c6bc0b2e4c0e7a83d2128d869afb1301.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter edu">
                <img src="https://www.aydasanver.com/wp-content/uploads/2015/08/concert-from-pixabay-365x365.jpg" className="img-responsive" />
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter birth">
                <img src="https://www.encouragementmama.com/wp-content/uploads/2017/08/birthday-candles-e1520970892361-365x365.jpg" className="img-responsive" />
            </div>
        </div>
    </div>
    </div>

    </div>

        );
    }
}

export default Gallery;