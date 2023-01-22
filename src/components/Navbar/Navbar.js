import React from 'react';
import "./Navbar.css";
import logo from "../../resources/snacks.png";


function Navbar() {

    function scrollToProducts(){
        const section = document.querySelector( '#products' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    function scrollToContact(){
        const section = document.querySelector( '#contact' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
        <div className="navbar">
            <div className="navbar-title">
                <h6 className="navigation-buttons" onClick={scrollToProducts}>Products</h6>
                <div className="logoMain">
                    <h3>Snackster</h3>
                    <img
                        src={logo}
                        width="50px"
                        height="50px"
                    />
                </div>
                <h6 className="navigation-buttons" onClick={scrollToContact}>Contact</h6>
            </div>
        </div>
    )
}

export default Navbar;