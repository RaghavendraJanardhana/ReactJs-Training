import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <header id="mu-header" className="" role="banner">
        <div className="container">
          <nav className="navbar navbar-default mu-navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                <a className="navbar-brand" href="#">
                  Biziness
                </a>
              </div>

              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav mu-menu navbar-right">
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#mu-about">ABOUT US</a>
                  </li>
                  <li>
                    <a href="#mu-service">SERVICES</a>
                  </li>
                  <li>
                    <a href="#mu-portfolio">PORTFOLIO</a>
                  </li>
                  <li>
                    <a href="#mu-team">TEAM</a>
                  </li>
                  <li>
                    <a href="#mu-clients">OUR CLIENTS</a>
                  </li>
                  <li>
                    <a href="#mu-contact">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
