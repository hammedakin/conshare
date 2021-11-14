import React from "react";
import play from './img/play.svg'
import app from './img/app.svg'
const Showcase = () => {
  return (
    <>
      <section class="showcase ">
        <div class="container ">
          <div class="showcase-content ">
            <div class=" animated fadeIn slow content col-md-6 ml-auto mr-auto ">
              <h2 class="">
                {" "}
                Share your contact and  Information Electronically and Easily with Conshare              </h2>

              <div class="mt-5">
                <h5> Contact Sharing made Easy</h5>
              </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-6 col-md-6">
                  <img src={play} width="30%" />
              <img src={app} width="30%" />

              </div>
              {/* <div className="col-md-3 col-6 float-right">
                
              </div> */}
              </div>
          </div>

            

           
        </div>
      </section>
    </>
  );
};

export default Showcase;
