import React, { useEffect, useState } from 'react';
import "./Home.css";
import HomeMainImage from "../../components/HomeMainImage/HomeMainImage";
import MarqueeProductLine from '../../components/MarqueeProductLine/MarqueeProductLine';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';
import RequestSteps from '../../components/RequestSteps/RequestSteps';
import OurMachines from '../../components/OurMachines/OurMachines';
import CallToday from '../../components/CallToday/CallToday';

function Home(){
    const [isDesktop, setDesktop] = useState(window.innerWidth);

    const updateMedia = () => {
      setDesktop(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

    function scrollToProducts(){
        const section = document.querySelector( '#products' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    function scrollToContact(){
        const section = document.querySelector( '#contact' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
        <div className="home">
            {isDesktop < 600 ?
                <div className="homePhoneScreenMainWrapper">
                    <hr className="homePhoneScreenMainWrapperSeparator" />
                    <div style={{ display: "block", fontWeight: "900", fontSize:"20px"}}>
                        <p>Vending solution for your business</p>
                        <p>Pasadena, CA</p>
                    </div>
                    <button className="home-main-rightButton" onClick={scrollToContact}>
                        START HERE
                    </button>
                </div>
                :
                <HomeMainImage />
            }
            <h4 style={{marginTop:"5%",marginBottom:"2%", fontWeight:"900"}} id="offers">What do we offer</h4>
            <Services />
            <br />
            <RequestSteps style={{width:"100vw"}}/>
            <h4 style={{marginTop:"5%",marginBottom:"4%", fontWeight:"900"}} id="offers">Vending Machines</h4>
            <OurMachines />
            <h4 style={{marginTop:"5%",marginBottom:"2%", fontWeight:"900"}} id="products">What do our customers like</h4>
            <MarqueeProductLine />
            <h4 style={{marginTop:"5%",marginBottom:"2%", fontWeight:"900"}} id="contact">How to get in touch with us</h4>
            <ContactForm />
            <CallToday />
            <Footer />
        </div>
    )
}

export default Home;

