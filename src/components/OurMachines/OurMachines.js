import React from 'react';
import SnackMachine from "../../resources/snack-machine.jpeg";
import DrinkMachine from "../../resources/vend-drink-machine.webp";
import "./OurMachines.css";


function OurMachines(){

    return(
        <div className="our-machines-wrapper row">
            <div className="machine-option col-6">
                <img className="machine-pics" src={SnackMachine} />
                <div className="machine-info">
                    <p className="machine-info-title">24-32-40 Selection Snack Machines</p>
                </div>
            </div>
            <div className="machine-option col-6">
                <img className="machine-pics" src={DrinkMachine} />
                <div className="machine-info">
                    <p className="machine-info-title">10 Selection Drink Machines</p>
                </div>
            </div>
        </div>
    )
}

export default OurMachines;
