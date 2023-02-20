import React from 'react';
import "./Services.css";
import VendingIcon from "../../resources/vending-machine.png";
import MaintenanceIcon from "../../resources/wrench.png";
import StatsIcon from "../../resources/web-analysis.png";
import Restocking from "../../resources/shipped.png";

function Services() {


    return (
        <div className="servicesWrapper">
            <div className="service-listing-r row">
                <div className="service-listing col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <img className="service-listing-icon" src={VendingIcon} />
                    <h5>Free Machine Placement</h5>
                    <p>We will deliver and install any of our vending machines for free.</p>
                </div>
                <div className="service-listing col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <img className="service-listing-icon" src={MaintenanceIcon} />
                    <h5>Maintenance</h5>
                    <p>Every machine we install is managed and maintained by us as needed.</p>
                </div>
                <div className="service-listing col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <img className="service-listing-icon" src={StatsIcon} />
                    <h5>Product Selection</h5>
                    <p>Our machines are remotely connected to our databases. We keep track of every purchase and select our product based on customer preference.</p>
                </div>
                <div className="service-listing col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <img className="service-listing-icon" src={Restocking} />
                    <h5>Restocking and Cleaning</h5>
                    <p>Our team is dedicated to keep our machines fully stocked and cleaned up on time.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;