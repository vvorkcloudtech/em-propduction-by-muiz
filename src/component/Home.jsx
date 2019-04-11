import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Welcome from './Welcome';
import About from './About';
import Gallery from './Gallery';
import Services from './Services';
import Team from './Team';
import Testominals from './Testominals';
import Contact from './Contact';
import Footer from './Footer';


class Home extends React.Component{

    render(){

        return(
            <div>
                <Navbar />
                <Header />
                <Welcome />
                <About />
                <Services />
                <Gallery />
                <Team />
                <Testominals />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home;