import React from 'react';
import "./Home.css";
import HomeMainImage from "../../components/HomeMainImage/HomeMainImage";
import MarqueeProductLine from '../../components/MarqueeProductLine/MarqueeProductLine';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';

function Home(){


    return (
        <div className="home">
            <HomeMainImage />
            <div className="home-main-box">
                <div className="home-main-box-statements">
                    <div className="home-main-box-misson">
                        <h4 style={{fontWeight:"900"}}>Mission</h4>
                        <p className="home-main-box-text">
                            <span style={{fontWeight:"900"}}>Snackster</span> is a Vending Operator that 
                            specializes in servicing residential and commercial properties.
                            Our mission is to bring the most <span style={{fontWeight:"900"}}>fresh product</span> to our customers 
                            and always deliver <span style={{fontWeight:"900"}}>outstanding customer service</span> to our location representatives.
                        </p>
                    </div>
                    <div className="home-main-box-vision">
                        <h4 style={{fontWeight:"900"}}>Vision</h4>
                        <p className="home-main-box-text">
                            Our vision is to expand our services nationwide based 
                            on the <span style={{fontWeight:"900"}}>variety</span> of machines and product selection as well as to improve <span style={{fontWeight:"900"}}>customer satisfaction</span>.
                            We are striving to make our product more <span style={{fontWeight:"900"}}>customized</span> by accounting for sales statistics and trends.
                        </p>
                    </div>
                </div>
            </div>
            <h4 style={{marginTop:"5%",marginBottom:"2%", fontWeight:"900"}} id="products">What do our customers like</h4>
            <MarqueeProductLine />
            <h4 style={{marginTop:"5%",marginBottom:"2%", fontWeight:"900"}} id="contact">How to get in touch with us</h4>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home;

