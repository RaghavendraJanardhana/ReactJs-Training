import React, { Component } from "react";
class Slider extends Component {
  render() {
    return (
      <section id="mu-featured-slider">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-featured-slide">
              <div className="mu-featured-slider-single">
                <img src="../assets/images/slider-img-1.jpg"></img>
                <div className="mu-featured-slider-content">
                  <h1>WELCOME TO BIZINESS</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                  <a href="#" className="mu-primary-btn">
                    CONTACT US
                  </a>
                </div>
              </div>

              <div className="mu-featured-slider-single">
                <img src="../assets/images/slider-img-2.jpg"></img>
                <div className="mu-featured-slider-content">
                  <h1>WE PROMOTE YOUR BUSINESS</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                  <a href="#" className="mu-primary-btn">
                    CONTACT US
                  </a>
                </div>
              </div>

              <div className="mu-featured-slider-single">
                <img src="../assets/images/slider-img-3.jpg"></img>
                <div className="mu-featured-slider-content">
                  <h1>FREE ONE PAGE TEMPLATE</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                  <a href="#" className="mu-primary-btn">
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Slider;
