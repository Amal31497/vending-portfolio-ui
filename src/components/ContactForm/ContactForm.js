import React, { useEffect, useState } from 'react';
import "./ContactForm.css";
import GenerateLead from "../../api/GenerateLead";

function ContactForm(){

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [buttonStatus, setButtonStatus] = useState('Submit');

    function submitForm(e) {
        e.preventDefault();

        if(buttonStatus === 'Thanks'){
            setButtonStatus('Submit');
            return;
        }

        if (name == null || name.trim().length == 0 || address == null || address.trim().length == 0 || phone == null || phone.trim().length == 0 || email == null || email.trim().length == 0) {
            setButtonStatus('Error');
            setTimeout(() => {
                setButtonStatus('Submit');
            }, 1000);
            return;
        }

        GenerateLead.createLead({
            leadId: name.replace(/\s+/g, ''),
            name: name,
            email: email,
            phone: phone,
            address: address,
            status:"warm"
        }).then((res) => {
            if (res.status === 201) {
                setButtonStatus('Thanks')
                setName('')
                setAddress('')
                setPhone('')
                setEmail('')
            } else {
                setButtonStatus('Error')
            }
        })
    }

    return (
        <div className="contact-form-wrapper">
            <div className="labels">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"red"}}>*</span>Name : </p>
                <p><span style={{color:"red"}}>*</span>Address : </p>
                <p>&nbsp;&nbsp;&nbsp;<span style={{color:"red"}}>*</span>Phone : </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"red"}}>*</span>Email : </p>
            </div>
            <div className="inputs">
                <input placeholder="Name of your business (Hotel, Apt complex, etc.)" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input placeholder="123 Best Street, City, State 99999" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                <input placeholder="(123)-456-7890" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                <input placeholder="youremail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <button className={`contact-form-${buttonStatus}-button`} onClick={(e) => submitForm(e)}><span>{buttonStatus}</span></button>
        </div>
    )
}

export default ContactForm;