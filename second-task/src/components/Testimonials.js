import React, { Component } from "react";
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
                    <li>
                      <p>
                        "Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever."
                      </p>
                      <h5 class="mu-ct-name"> - Jhon Doe</h5>
                      <span class="mu-ct-title">CEO, Apple Inc.</span>
                    </li>

                    <li>
                      <p>
                        "Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever."
                      </p>
                      <h5 class="mu-ct-name"> - Alice Boga</h5>
                      <span class="mu-ct-title">Director, Google Inc.</span>
                    </li>

                    <li>
                      <p>
                        "Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever."
                      </p>
                      <h5 class="mu-ct-name"> - Jhon Smith</h5>
                      <span class="mu-ct-title">Web Developer</span>
                    </li>
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
