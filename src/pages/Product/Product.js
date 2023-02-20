import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import "./Product.css";
import ApartmentComplex from "../../resources/apartment.png";
import Office from "../../resources/workspace.png";
import WareHouse from "../../resources/warehouse.png";
import Hospital from "../../resources/hospital.png";
import Fitness from "../../resources/dumbbell.png";
import Custom from "../../resources/idea.png";
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { AiOutlineRight } from 'react-icons/ai';

function Product() {

    const [apartment, setApartment] = useState("disApt");
    const [office, setOffice] = useState("disOff");
    const [wareHouse, setWareHouse] = useState("disWar");
    const [fitness, setFitness] = useState("disFit");
    const [custom, setCustom] = useState("disCus");
    const [hospital, setHospital] = useState("disHos");
    let history = useHistory ();

    function onClick(event) {
        event.preventDefault();
        if (event.target.className.length === 0) {
            return;
        }

        if (event.target.className.includes("apartment")) {
            apartment === "disApt" ? setApartment("actApt") : setApartment("disApt");
        }

        if (event.target.className.includes("office")) {
            office === "disOff" ? setOffice("actOff") : setOffice("disOff");
        }

        if (event.target.className.includes("warehouse")) {
            wareHouse === "disWar" ? setWareHouse("actWar") : setWareHouse("disWar");
        }
        if (event.target.className.includes("fitness")) {
            fitness === "disFit" ? setFitness("actFit") : setFitness("disFit");
        }

        if (event.target.className.includes("hospital")) {
            hospital === "disHos" ? setHospital("actHos") : setHospital("disHos");
        }

        if (event.target.className.includes("custom")) {
            custom === "disCus" ? setCustom("actCus") : setCustom("disCus");
        }

        console.log(event.target.className);
    }

    function showContact(event){
        event.preventDefault();
        history.push("./Contact");
    }

    return (
        <div className="product-bundles-main-wrapper">
            <h4 style={{marginTop:"5%",marginBottom:"2%", fontWeight:"900"}}>What goes into our machines</h4>
            <div className="product-bundles-secondary-wrapper row">
                <p className="product-bundles-summary">
                    Our team is dedicated to customize and offer only relevant product to our customers. 
                    Depending on what type of location you have, you can select one of the 5 bundles that 
                    we offer with pre-selected categories. Additionally, you may request a customized product 
                    selection.
                </p>
                <div className={"apartment product-bundle-" + apartment + " col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12"} onClick={(event) => onClick(event)}>
                    <div className={"apartment slide-up-" + apartment} onClick={(event) => onClick(event)}>
                        <p className={"apartment product-bundle-title-" + apartment} onClick={(event) => onClick(event)}>Apartment Bundle</p>
                        <img src={ApartmentComplex} className="apartment product-bundle-img" onClick={(event) => onClick(event)} />
                    </div>
                    <div className={"apartment row product-bundle-info-" + apartment} onClick={(event) => onClick(event)}>
                        <div className="apartment col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"apartment"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Chips</p>
                            <p className={"apartment"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Candy</p>
                            <p className={"apartment"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Pastries</p>
                            <p className={"apartment"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Granola Bars</p>
                            <p className={"apartment"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Cookies</p>
                        </div>
                        <div className="apartment col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"apartment"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Sodas</p>
                            <p className={"apartment"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Water</p>
                            <p className={"apartment"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Electrolyte beverages</p>
                            <p className={"apartment"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Iced Tea</p>
                        </div>
                        <p className="learnMoreActionButton" onClick={(event) => showContact(event)}>Learn More <AiOutlineRight /></p>
                    </div>
                </div>
                <div className={"office product-bundle-" + office + " col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12"} onClick={(event) => onClick(event)}>
                    <div className={"office slide-up-" + office} onClick={(event) => onClick(event)}>
                        <p className={"office product-bundle-title-" + office} onClick={(event) => onClick(event)}>Office Bundle</p>
                        <img src={Office} className="office product-bundle-img" onClick={(event) => onClick(event)} />
                    </div>
                    <div className={"office row product-bundle-info-" + office} onClick={(event) => onClick(event)}>
                        <div className="office col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"office"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Chips</p>
                            <p className={"office"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Energy Bars</p>
                            <p className={"office"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Protein Bars</p>
                            <p className={"office"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Granola Bars</p>
                            <p className={"office"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Gum</p>
                        </div>
                        <div className="office col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"office"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Sodas</p>
                            <p className={"office"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Water</p>
                            <p className={"office"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Sparkling water</p>
                            <p className={"office"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Energy Drinks</p>
                        </div>
                        <p className="learnMoreActionButton" onClick={(event) => showContact(event)}>Learn More <AiOutlineRight /></p>
                    </div>
                </div>
                <div className={"warehouse product-bundle-" + wareHouse + " col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12"} onClick={(event) => onClick(event)}>
                    <div className={"warehouse slide-up-" + wareHouse} onClick={(event) => onClick(event)}>
                        <p className={"warehouse product-bundle-title-" + wareHouse} onClick={(event) => onClick(event)}>Warehouse Bundle</p>
                        <img src={WareHouse} className="warehouse product-bundle-img" onClick={(event) => onClick(event)} />
                    </div>
                    <div className={"warehouse row product-bundle-info-" + wareHouse} onClick={(event) => onClick(event)}>
                        <div className="warehouse col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"warehouse"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Chips</p>
                            <p className={"warehouse"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Candy</p>
                            <p className={"warehouse"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Protein Bars</p>
                            <p className={"warehouse"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Gum</p>
                            <p className={"warehouse"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Cookies</p>
                        </div>
                        <div className="warehouse col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"warehouse"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Sodas</p>
                            <p className={"warehouse"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Water</p>
                            <p className={"warehouse"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Iced Tea</p>
                            <p className={"warehouse"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Energy Drinks</p>
                        </div>
                        <p className="learnMoreActionButton" onClick={(event) => showContact(event)}>Learn More <AiOutlineRight /></p>
                    </div>
                </div>
                <div className={"hospital product-bundle-" + hospital + " col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12"} onClick={(event) => onClick(event)}>
                    <div className={"hospital slide-up-" + hospital} onClick={(event) => onClick(event)}>
                        <p className={"hospital product-bundle-title-" + hospital} onClick={(event) => onClick(event)}>Hospital Bundle</p>
                        <img src={Hospital} className="hospital product-bundle-img" onClick={(event) => onClick(event)} />
                    </div>
                    <div className={"hospital row product-bundle-info-" + hospital} onClick={(event) => onClick(event)}>
                        <div className="hospital col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"hospital"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Chips</p>
                            <p className={"hospital"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Candy</p>
                            <p className={"hospital"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Pastries</p>
                            <p className={"hospital"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Granola Bars</p>
                            <p className={"hospital"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Cookies</p>
                        </div>
                        <div className="hospital col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"hospital"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Sodas</p>
                            <p className={"hospital"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Water</p>
                            <p className={"hospital"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Electrolyte beverages</p>
                            <p className={"hospital"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Sparkling water</p>
                        </div>
                        <p className="learnMoreActionButton" onClick={(event) => showContact(event)}>Learn More <AiOutlineRight /></p>
                    </div>
                </div>
                <div className={"fitness product-bundle-" + fitness + " col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12"} onClick={(event) => onClick(event)}>
                    <div className={"fitness slide-up-" + fitness} onClick={(event) => onClick(event)}>
                        <p className={"fitness product-bundle-title-" + fitness} onClick={(event) => onClick(event)}>Fitness Bundle</p>
                        <img src={Fitness} className="fitness product-bundle-img" onClick={(event) => onClick(event)} />
                    </div>
                    <div className={"fitness row product-bundle-info-" + fitness} onClick={(event) => onClick(event)}>
                        <div className="fitness col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"fitness"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Whey Protein Bars</p>
                            <p className={"fitness"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Plant Protein Bars</p>
                            <p className={"fitness"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Protein Cookies</p>
                            <p className={"fitness"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Granola Bars</p>
                            <p className={"fitness"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Fruit Bars</p>
                        </div>
                        <div className="fitness col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className={"fitness"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Sparkling Water</p>
                            <p className={"fitness"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Water</p>
                            <p className={"fitness"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Electrolyte beverages</p>
                            <p className={"fitness"} onClick={(event) => onClick(event)}><IoMdCheckmarkCircleOutline />Energy Drinks</p>
                        </div>
                        <p className="learnMoreActionButton" onClick={(event) => showContact(event)}>Learn More <AiOutlineRight /></p>
                    </div>
                </div>
                <div className={"custom product-bundle-" + custom + " col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12"} onClick={(event) => onClick(event)}>
                    <div className={"custom slide-up-" + custom} onClick={(event) => onClick(event)}>
                        <p className={"custom product-bundle-title-" + custom} onClick={(event) => onClick(event)}>Custom Bundle</p>
                        <img src={Custom} className="custom product-bundle-img" onClick={(event) => onClick(event)} />
                    </div>
                    <div className={"custom row product-bundle-info-" + custom} onClick={(event) => onClick(event)}>
                        <div className="custom col product-bundle-list" onClick={(event) => onClick(event)}>
                            <p className="custom">
                                If you are interested in products that are not 
                                listed, or your establishment has specific dietery 
                                requirements, you can pick your own selection and 
                                we will make sure to build a selection that matches 
                                your interests.
                            </p>
                        </div>
                        <p className="learnMoreActionButton" onClick={(event) => showContact(event)}>Learn More <AiOutlineRight /></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product;