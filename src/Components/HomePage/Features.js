import React from "react";
import credit from "./img/credit.svg";
import link from "./img/link.svg";
import qr from "./img/qr.svg";
import tag from "./img/tag.svg";
import img3 from "./img/3.png";

const Features = () => {
  return (
    <>
      <section className="features">
        <div className="container">
          <div class="row ">
            <div class="col-md-7 align-self-center">
              <div className="col-md-10">
                <div class="flex">
                  <img src={credit} width="10%" className="mr-3" />
                  <div className="">
                    <p className="bold">E- CARDS</p>
                    <p> Share and save contacts Electronically. </p>
                  </div>
                </div>
                <div class="flex">
                  <img src={link} width="10%" className="mr-3" />
                  <div className="">
                    <p className="bold">Contact Link</p>
                    <p> Send and share your contacts through your personal created link. </p>
                  </div>
                </div>
                <div class="flex">
                  <img src={qr} width="10%" className="mr-3" />
                  <div className="">
                    <p className="bold">QR CODE</p>
                    <p> Share your contact through scanning of QR code and save contact easily.</p>
                  </div>
                </div>
                <div class="flex">
                  <img src={tag} width="10%" className="mr-3" />
                  <div className="">
                    <p className="bold">Personal Tag</p>
                    <p> Send and share your contacts through your created personal tag. </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 text-center">
              <h5> THE BEST CHOICE </h5>
              <div className="">
                <img src={img3} width="60%" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
