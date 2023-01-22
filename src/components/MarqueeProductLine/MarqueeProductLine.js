import React from 'react';
import Marquee from "react-fast-marquee";
import Cheetos from "../..//resources/cheetos-logo.jpeg";
import Coke from "../../resources/Coca-Cola-Logo-2.jpeg";
import Doritos from "../../resources/Doritos-logo.png";
import Gatorate from "../../resources/Gatorade-logo.jpeg";
import Lays from "../../resources/Lays-Logo.png";
import Oreo from "../../resources/oreo-logo.jpeg";
import Pepsi from "../../resources/pepsi-logo.png";
import Quaker from "../../resources/quaker-logo.webp";
import Snickers from "../../resources/Snickers-Logo.png";
import Sprite from "../../resources/Sprite-Logo.png";
import MM from "../../resources/MMs-logo.png";
import PopTarts from "../../resources/pop-tarts-logo.jpeg";
import Reeses from "../../resources/reeses-logo.png";
import DrPepper from "../../resources/dr-pepper-logo.png";

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