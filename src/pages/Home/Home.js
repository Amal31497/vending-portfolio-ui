import React from 'react';
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


    return (
        <div className="home">
            <HomeMainImage />
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

