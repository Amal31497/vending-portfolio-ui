import React from 'react';
import SnackMachine from "../../resources/snack-vending-machine.png";
import DrinkMachine from "../../resources/vend-drink-machine.webp";
import "./OurMachines.css";
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { SlEnergy } from 'react-icons/sl';
import { AiOutlineControl } from 'react-icons/ai';


function OurMachines(){

    return(
        <div className="our-machines-wrapper row">
            <span className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12"></span>
            <div className="our-machines-info col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p id="our-machines-main-text">Choose a vending machine that fits your organization or building and suits your standards. 
                    Our machine selection consists of snack, drink and combo machines. We monitor placed machines
                     and act promptly to restock them in a timely manner. Every machine is equipped with electronic card reader as well as cash
                     payment processor. </p>
                <div>
                    <p className="our-machines-extra"><span style={{marginRight:"15px"}}><BsFillCreditCard2BackFill size="30" /></span> Electronic Card Reader (Cashless Payments)</p>
                    <p className="our-machines-extra"><span style={{marginRight:"15px"}}><SlEnergy size="30" /></span> Energy Efficient</p>
                    <p className="our-machines-extra"><span style={{marginRight:"15px"}}><AiOutlineControl size="30" /></span> Remotely Monitored</p>
                </div>
            </div>
            <div className="machine-pics-wrapper col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <img className="machine-pics" src={SnackMachine} />
            </div>
            <span className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12"></span>
        </div>
    )
}

export default OurMachines;
