import React, { Component } from "react";
import TestimonialsRepetative from "./TestimonialsRepetative";
class Testimonials extends Component {
  render() {
    return (
      <section id="mu-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-testimonials-area">
                <h2 className="mu-heading-title">
                  Client <span>Testimonials</span>
                </h2>

                <div className="mu-testimonials-block">
                  <ul className="mu-testimonial-slide">
                    <TestimonialsRepetative
                      pGraph="Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever."
                      Heading5="- Jhon Doe"
                      SpanField="CEO, Apple Inc."
                    />
                    <TestimonialsRepetative
                      pGraph="Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever."
                      Heading5=" - Alice Boga"
                      SpanField="Director, Google Inc."
                    />
                    <TestimonialsRepetative
                      pGraph="Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever."
                      Heading5=" - Jhon Smith"
                      SpanField="Web Developer"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Testimonials;
