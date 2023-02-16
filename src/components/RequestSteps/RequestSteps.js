import React from 'react';
import "./RequestSteps.css";
import { FiPhoneCall } from 'react-icons/fi';
import { TbListSearch } from 'react-icons/tb';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function RequestSteps(){

    return(
        <div className="request-steps-wrapper">
            <h4 style={{ marginTop: "8%", marginBottom: "3%", fontWeight: "900" }} id="requestSteps">How to request our services</h4>
            <div className="request-steps-wrapper-steps row">
                <div className="request-steps-wrapper-step col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <FiPhoneCall size="48" className="smallIcon"/>
                    <p>Schedule a call with us</p>
                </div>
                <div className="request-steps-wrapper-step col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <TbListSearch size="48" className="smallIcon"/>
                    <p>Select a machine you like from our packet</p>
                </div>
                <div className="request-steps-wrapper-step col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <AiOutlineCheckCircle size="48" className="smallIcon"/>
                    <p>Enjoy your automated free vending solution</p>
                </div>
            </div>
        </div>
    )
}

export default RequestSteps;