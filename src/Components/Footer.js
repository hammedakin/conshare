import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <footer class="page-footer font-small">
          <div class="container text-center text-md-left mb-5 pt-5">
            <div class="row">
              <div class="col-md-3 mx-auto">
                <h5 class=" mt-3 mb-4">Ready to get started?</h5>
                <Link to="/">
                  <button class="btn "> Get Started</button>
                </Link>
               
               
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="ml-auto mr-auto">
                <h6 class="font-weight-bold text-center mt-3 mb-4">
                  CONNECT WITH US
                </h6>
                <div class="text-center mb-3 boxicons">
                  <a
                    href="https://conshare.com.ng"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      type="logo"
                      name="facebook"
                    ></box-icon>
                  </a>

                  <a href="https://instagram.com/conshare_">
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="instagram"
                      type="logo"
                    ></box-icon>
                  </a>

                  <a
                    href="https://twitter.com/Conshare11?s=08"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="twitter"
                      type="logo"
                    ></box-icon>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/conshare"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="linkedin"
                      type="logo"
                    ></box-icon>
                  </a>

                  <a
                    href="mailto:conshareofficial@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <box-icon
                      class="box-icon"
                      size="1.5rem"
                      color=" #fff"
                      name="envelope"
                      type="logo"
                    ></box-icon>
                  </a>

                 
                </div>
              </div>
            </div>
          </div>

          <div class="footer-copyright black-text text-center py-3">
            Copyright © 2021{" "}
            <a href="https://conshare.com.ng" class="blue-text ">
              CONSHARE
            </a>{" "}
            || All rights reserved

          {/* <hr class="my-1 w-50"/>

          <div style={{fontSize: "smaller"}}>
            Developed by
            <a href="https://fireswitch.tech" class="red-text ">
              {" "}
              FireSwitch Technologies{" "}
            </a>
            </div> */}
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
