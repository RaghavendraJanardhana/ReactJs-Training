import React, { Component } from "react";
import TestimonialsRepetative from "./TestimonialsRepetative";
class Testimonials extends Component {
  render() {
    return (
      <section id="mu-testimonials">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-testimonials-area">
                <h2 class="mu-heading-title">
                  Client <span>Testimonials</span>
                </h2>

                <div class="mu-testimonials-block">
                  <ul class="mu-testimonial-slide">
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
