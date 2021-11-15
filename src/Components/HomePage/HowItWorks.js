import React from 'react';
import download from './img/download.svg'
import contact from './img/contact.svg'
import group from './img/group.svg'
import img3 from "./img/4.png";



const HowItWorks = () => {
    return ( 
        <>
    <section className="howitworks" id="howitworks">
        <div className="container">
            <div className="row">
                <div className="col-md-5 text-center align-self-center">
                <img src={img3} width="50%" className="mb-5" />
                </div>
                <div className="col-md-7 align-self-center text-justify">
                    <h5> How Conshare Works</h5>
                    <p> Conshare provides an E-Card platform where contact and social media informations can be share easily and faster. Conshare gives opportunity to save contact to phone easily. </p>

                    <div className="flex">
                        <img src={download} width="10%" className="mr-3" />
                        <div className="">
                            <p class="bold"><b>Download </b> </p>
                            <p> Download Conshare App on either Google play or App store </p>
                            
                        </div>
                    </div>
                    <div className="flex">
                        <img src={contact} width="10%" className="mr-3" />
                        <div className="">
                            <p class="bold"><b>Sign Up </b> </p>
                            <p> Sign Up and input all contact and social media information into Conshare app after installation. </p>
                            
                        </div>
                    </div>
                    <div className="flex">
                        <img src={group} width="10%" className="mr-3" />
                        <div className="">
                            <p class="bold"><b>Share </b> </p>
                            <p>Share contact through QR code, personal links, personal tags </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
     );
}
 
export default HowItWorks;