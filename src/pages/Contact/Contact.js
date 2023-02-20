import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

function Contact(){

    return (
        <div className="contactPageWrapper">
            <div className="row" style={{ width: "90%", display:"flex", alignContent:"center", height:"100%"}}>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <h4 style={{marginTop:"5%",marginBottom:"2%", fontWeight:"900"}}>Get in touch with us to learn more about our services</h4>
                    <ContactForm />
                </div>
                <div  className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <h4 style={{ marginTop:"5%",marginBottom:"2%", fontWeight:"900" }}>Our Referral Program</h4>
                    <p style={{ marginTop:"5%",marginBottom:"10%", fontWeight:"900"}}>
                        Does your establishment need a vending machine? 
                        If you connect us with your building's management 
                        and it results in the vending machine placement, 
                        you may receive upto 300$ as a finder's fee from 
                        Snackster LLC
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;