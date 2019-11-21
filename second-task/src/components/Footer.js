import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer id="mu-footer" role="contentinfo">
        <div className="container">
          <div className="mu-footer-area">
            <p>
              &copy; Copyright{" "}
              <a rel="nofollow" href="http://markups.io">
                markups.io
              </a>
              . All right reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
