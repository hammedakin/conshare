import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./logo.svg";
const Navbar = () => {
  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-200px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  return (
    <>
      <nav class="navbar navbar-expand-md fixed-top" id="navbar">
        <div class="container">
          <Link to="/" className="navbar-brand mt-2 mb-2">
            <img src={logo} width="100%" alt="logo" loading="lazy" />
          </Link>

          <a
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon toggler">
              <box-icon
                class="box-icon"
                size="2rem"
                color="#fff"
                name="menu-alt-right"
                type="logo"
              ></box-icon>
            </span>
          </a>

          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav mr-auto ml-auto text-center animated fadeInUp">
              <li class="nav-item">
              <a
    ClassName="active" href="#home">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a
                  ClassName="active"
                  href="#features"
                >
                  Features
                </a>
              </li>
             

              <li class="nav-item">
                <a
                  ClassName="active"
                  href="#faq"
                >
                  FAQs
                </a>
              </li>

              <li class="nav-item">
                <a
                  ClassName="active"
                  href="#contact"
                >
                  Contacts
                </a>
              </li>
            </ul>
            <ul class="navbar-nav text-center animated fadeInRight">
              <a href="#contact">
                <li class=" btn-contact">
                  <button type="btn" class="btn shadow">
                    contact us
                  </button>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
