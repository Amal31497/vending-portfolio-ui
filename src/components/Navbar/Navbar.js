import React from 'react';
import "./Navbar.css";
import { useHistory } from 'react-router-dom';
import logo from "../../resources/snacks.png";

function Navbar() {
    let history = useHistory ();
    function goToProducts(){
        history.push("./Products");
    };

    function goToContact(){
        history.push("./Contact");
    };

    function goToHome(){
        history.push("./");
    }

    return (
        <div className="navbar">
            <div className="navbar-title">
                <h6 className="navigation-buttons" onClick={goToProducts}>Products</h6>
                <div className="logoMain" onClick={goToHome}>
                    <h3>Snackster
                        <span style={{paddingLeft:"10px"}}>
                            <img
                                src={logo}
                                width="50px"
                                height="50px"
                            />
                        </span>
                    </h3>
                </div>
                <h6 className="navigation-buttons" onClick={goToContact}>Contact</h6>
            </div>
        </div>
    )
}

export default Navbar;