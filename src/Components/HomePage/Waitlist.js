import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import img from "./img/1.png";

const Waitlist = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [issending, setissending] = useState(false);
  const [showalert, setshowalert] = useState(false);
  const [alert, setalert] = useState("");

  function Auth(e) {
    if ((name, email)) {
      setissending(true);

      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      axios
        .post(`http://conshare.herokuapp.com/register`, data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.success === true) {
            setshowalert(true);
            setname(res.data.name);
            setemail(res.data.email);
            setalert("Sent Successful");
            setissending(false);
          } else {
            setshowalert(true);
            setalert("Not Sent");
            setissending(false);
          }
        })
        .catch((error) => {
          console.log(error.name);
          setshowalert(true);
          setalert(error.name);
          setissending(false);
        });
    } else {
      setshowalert(true);
      setalert("Empty fields, Check form again!");
      setissending(false);
    }
    e.preventDefault();
  }

  return (
    <>
      <section className="waitlist">
        <div className="container">
          <div className="col-md-10 ml-auto mr-auto">
            <div className="first">
              <div className="row ">
                <div className="col-md-7 text-center">
                  <h3>Get Ahead and join our Whitelist </h3>

                  <div className="form">
                    <form>
                      <div className="row justify-content-center">
                        <div className="col-md-10">
                          {/* <label> Name </label> */}

                          <div className="input-group">
                            <input
                              type="text"
                              className=" input-style"
                              placeholder="Enter Name "
                              onChange={(e) => setname(e.target.value)}
                              value={name}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-10">
                          {/* <label> Name </label> */}

                          <div className="input-group">
                            <input
                              type="email"
                              className=" input-style"
                              placeholder="Email Address"
                              onChange={(e) => setemail(e.target.value)}
                              value={email}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-10  mx-auto text-center">
                          {showalert ? (
                            <>
                              <Alert color="light">{alert}</Alert>
                            </>
                          ) : (
                            <></>
                          )}
                          <div className="">
                            {issending ? (
                              <>
                                <button
                                  type="button"
                                  class="btn shadow waves-effect"
                                  disabled
                                >
                                  {/* sending */}
                                  <Spinner color="light" size="0.1rem" />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  class="btn shadow waves-effect"
                                  action="submit"
                                  onClick={(e) => Auth(e)}
                                  >
                                  submit
                                </button>
                              </>
                            )}
                        
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 text-center">
                  <img src={img} width="50%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Waitlist;
