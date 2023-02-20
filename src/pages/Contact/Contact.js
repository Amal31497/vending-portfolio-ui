import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

function Contact(){

    return (
        <div className="contactPageWrapper">
            <div style={{width:"100%", marginTop:"50px"}}>
                <p style={{marginBottom:"50px", fontWeight:"800"}}>Get in touch with us to learn more about our services</p>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;