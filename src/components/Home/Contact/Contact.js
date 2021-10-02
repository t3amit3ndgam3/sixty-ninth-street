import React, { useRef } from "react";
import "../Unmoy.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hpetmir",
        "template_ahzdtso",
        form.current,
        "user_dc7EGv4h3QNVk0mXXSLic"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact_wrapper">
      <div className="left_side">
        <h3>We Help You Buy or Sell Your Property Quickly</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua sdolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="right_side">
        <form ref={form} onSubmit={handleSubmit} className="form_wrapper">
          <div class="group">
            <input className="contact_input" name="name" type="text" required />
            <span class="bar"></span>
            <label className="contact_label">Name</label>
          </div>
          <div class="group">
            <input
              className="contact_input"
              name="number"
              type="number"
              required
            />
            <span class="bar"></span>
            <label className="contact_label">Phone Number</label>
          </div>
          <div class="group">
            <input
              className="contact_input"
              name="email"
              type="text"
              required
            />
            <span class="bar"></span>
            <label className="contact_label">Email</label>
          </div>
          <div class="group">
            <input
              className="contact_input"
              name="message"
              type="text"
              required
            />
            <span class="bar"></span>
            <label className="contact_label">Your Messege</label>
          </div>
          <div className="button_wrap">
            <button type="submit">Send Messege</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
