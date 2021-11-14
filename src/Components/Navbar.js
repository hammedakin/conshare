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
      <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div class="container">
          <Link to="/home" className="navbar-brand">
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
                color="#0E6EFF"
                name="menu-alt-right"
                type="logo"
              ></box-icon>
            </span>
          </a>

          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav mr-auto ml-auto text-center animated fadeInUp">
              <li class="nav-item">
                <NavLink tag={Link} activeClassName="active1 " to="/">
                  Home
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/a"

                >
                  Features
                </NavLink>
              </li>
             

              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/a"

                >
                  FAQs
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/a"

                >
                  Contacts
                </NavLink>
              </li>
            </ul>
            <ul class="navbar-nav text-center animated fadeInRight">
              <Link to="/contact">
                <li class=" btn-contact">
                  <button type="btn" class="btn shadow">
                    contact us
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
