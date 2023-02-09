import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import "./CallToday.css";

function CallToday(){

    return(
        <div className="call-today-wrapper">
            <FiPhoneCall style={{marginRight:"10px"}} />
            <p>CALL TODAY:  1-314-378-4296</p>
        </div>
    )
}

export default CallToday;

