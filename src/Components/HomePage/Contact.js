import React from "react";
import location from "./img/location.svg";
import message from "./img/message.svg";
import call from "./img/call.svg";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="">
                <div class="flex">
                  <img src={location} width="10%" className="mr-3" />
                  <div className="">
                    <p className="bold"> Location:</p>
                    <p> No 6, San francisco avenue, London, England.</p>
                  </div>
                </div>
                <div class="flex">
                  <img src={message} width="10%" className="mr-3" />
                  <div className="">
                    <p className="bold"> Email:</p>
                    <p> loremipsum@gmail.com</p>
                  </div>
                </div>
                <div class="flex">
                  <img src={call} width="10%" className="mr-3" />
                  <div className="">
                    <p className="bold"> Call:</p>
                    <p> (+466) 789 87 765</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
                <h5 className="text-center"> GET IN TOUCH </h5>
              <div className="form">
                <form>
                  <div className="row justify-content-center">
                    <div className="col-md-5">
                      {/* <label> Name </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Full Name *"
                        />
                      </div>
                    </div>

                    <div className="col-md-5">
                      {/* <label> Name </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Email Address *"
                        />
                      </div>
                    </div>

                    <div className="col-md-10">
                      {/* <label> Name </label> */}

                      <div className="input-group">
                        <input
                          type="text"
                          className=" input-style"
                          placeholder="Subject "
                        />
                      </div>
                    </div>


                    <div className="col-md-10 ">
                      <div className="input-group">
                        <textarea
                          type="text"
                          className="input-style textarea-style"
                          placeholder="Message *"
                        ></textarea>
                      </div>
                    </div>
                <div class="col-md-10  mx-auto text-center">
                <button
                    type="button"
                    class="btn shadow waves-effect"
                    action="submit"
                  >
                    
                submit 
                  </button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
