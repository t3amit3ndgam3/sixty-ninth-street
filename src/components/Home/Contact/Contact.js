import React from "react";
import "../Home.css";
const Contact = () => {
  return (
    <div className="contact_wrapper">
      <div className="left_side">
        <h3>We Help You Buy or Sell Your Property Quickly</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="right_side">
        <div className="form_wrapper">
          <div class="group">
            <input type="text" required />
            <span class="bar"></span>
            <label>Name</label>
          </div>
          <div class="group">
            <input type="text" required />
            <span class="bar"></span>
            <label>Phone Number</label>
          </div>
          <div class="group">
            <input type="text" required />
            <span class="bar"></span>
            <label>Email</label>
          </div>
          <div class="group">
            <input type="text" required />
            <span class="bar"></span>
            <label>Your Messege</label>
          </div>
          <div className="button_wrap">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
