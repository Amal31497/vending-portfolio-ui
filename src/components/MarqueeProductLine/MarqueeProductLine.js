import React from 'react';
import Marquee from "react-fast-marquee";
import Doritos from "../../resources/Doritos-logo.png";
import Lays from "../../resources/Lays-Logo.png";
import Pepsi from "../../resources/pepsi-logo.png";
import Snickers from "../../resources/Snickers-Logo.png";
import Sprite from "../../resources/Sprite-Logo.png";
import MM from "../../resources/MMs-logo.png";
import Reeses from "../../resources/reeses-logo.png";
import DrPepper from "../../resources/dr-pepper-logo.png";
import Oreo from "../../resources/Oreo-Logo.png";
import Cheetos from "../..//resources/cheetos-logo.png";
import Coke from "../../resources/Coca-Cola-logo.png";
import Gatorate from "../../resources/Gatorade-logo.png";
import Quaker from "../../resources/Quaker-Logo.png";
import PopTarts from "../../resources/Poptarts-Logo.png";

import "./MarqueeProductLine.css";

function MarqueeProductLine(){

    return(
        <div className="marquee-wrapper">
            <Marquee speed="80">
                <img src={Cheetos} className="marguee-image"/>
                <img src={Coke} className="marguee-image" />
                <img src={Doritos} className="marguee-image" />
                <img src={Gatorate} className="marguee-image" />
                <img src={Lays} className="marguee-image" />
                <img src={Oreo} className="marguee-image" />
                <img src={Pepsi} className="marguee-image" />
                <img src={Quaker} className="marguee-image" />
                <img src={Snickers} className="marguee-image" />
                <img src={Sprite} className="marguee-image" />
                <img src={MM} className="marguee-image" />
                <img src={PopTarts} className="marguee-image" />
                <img src={Reeses} className="marguee-image" />
                <img src={DrPepper} className="marguee-image" />
            </Marquee>
        </div>
    )
}

export default MarqueeProductLine;