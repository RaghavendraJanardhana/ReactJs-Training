import React, { Component } from "react";
import PortfolioRepetative from "./PortfolioRepetative";
class Portfolio extends Component {
  render() {
    return (
      <section id="mu-portfolio">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-portfolio-area">
                <div class="mu-portfolio-header">
                  <h2 class="mu-heading-title">
                    OUR <span>PORTFOLIO</span>
                  </h2>
                  <span class="mu-header-dot"></span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>

                <div class="mu-portfolio-filter-area">
                  <ul class="mu-simplefilter">
                    <li class="active" data-filter="all">
                      All
                    </li>
                    <li data-filter="1">Web App</li>
                    <li data-filter="2">UI/UX</li>
                    <li data-filter="3">Graphics Design</li>
                    <li data-filter="4">Mobile App</li>
                    <li data-filter="5">Branding</li>
                    <li data-filter="6">Marketing</li>
                  </ul>
                </div>

                <div class="mu-portfolio-content">
                  <div class="filtr-container">
                    <PortfolioRepetative
                      dataCategory="1"
                      href="assets/images/portfolio/img-1.jpeg"
                      title="Web Development"
                      src="../assets/images/portfolio/img-1.jpeg"
                      HeadingTitle="WEB DEVELOPMENT"
                    />

                    <PortfolioRepetative
                      dataCategory="2"
                      href="../assets/images/portfolio/img-2.jpeg"
                      title="UI/UX DESIGN"
                      src="../assets/images/portfolio/img-2.jpeg"
                      HeadingTitle="UI/UX DESIGN"
                    />
                    <PortfolioRepetative
                      dataCategory="3"
                      href="../assets/images/portfolio/img-3.jpeg"
                      title="GRAPHICS DESIGN"
                      src="../assets/images/portfolio/img-3.jpeg"
                      HeadingTitle="GRAPHICS DESIGN"
                    />
                    <PortfolioRepetative
                      dataCategory="4"
                      href="../assets/images/portfolio/img-4.jpeg"
                      title="MOBILE APP"
                      src="../assets/images/portfolio/img-4.jpeg"
                      HeadingTitle="MOBILE APP"
                    />
                    <PortfolioRepetative
                      dataCategory="5"
                      href="../assets/images/portfolio/img-5.jpeg"
                      title="BRANDING"
                      src="../assets/images/portfolio/img-5.jpeg"
                      HeadingTitle="BRANDING"
                    />
                    <PortfolioRepetative
                      dataCategory="6"
                      href="../assets/images/portfolio/img-6.jpeg"
                      title="MARKETING"
                      src="../assets/images/portfolio/img-6.jpeg"
                      HeadingTitle="MARKETING"
                    />
                    <PortfolioRepetative
                      dataCategory="1"
                      href="../assets/images/portfolio/img-7.jpg"
                      title="WEB DEVELOPMENT"
                      src="../assets/images/portfolio/img-7.jpg"
                      HeadingTitle="WEB DEVELOPMENT"
                    />
                    <PortfolioRepetative
                      dataCategory="4"
                      href="../assets/images/portfolio/img-8.jpeg"
                      title="MOBILE APP"
                      src="../assets/images/portfolio/img-8.jpeg"
                      HeadingTitle="MOBILE APP"
                    />
                    <PortfolioRepetative
                      dataCategory="3"
                      href="../assets/images/portfolio/img-9.jpeg"
                      title="GRAPHICS DESIGN"
                      src="../assets/images/portfolio/img-9.jpeg"
                      HeadingTitle="GRAPHICS DESIGN"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;
