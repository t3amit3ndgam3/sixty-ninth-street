import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/dashboard");
    }
  }, [history]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  const handlegoogle = async () => {
    setLoading(true);
    await signInWithGoogle();
    history.push("/");
  };
  return (
    <div className="login_wrapper">
      <div className="login_card ">
        <div className="signup_header">
          <h4>
            <span> Welcome to </span>
            <br /> Sixty Ninth Street
          </h4>
        </div>
        <h5 className="text-center mb-4">Create an account</h5>
        {error && <alert variant="danger">{error}</alert>}
        <form onSubmit={handleSubmit} className="login_content">
          <div class="group">
            <input
              ref={nameRef}
              className="contact_input"
              name="name"
              type="text"
              required
            />
            <span class="bar"></span>
            <label className="contact_label">Name</label>
          </div>
          <div class="group">
            <input
              ref={emailRef}
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
              ref={passwordRef}
              className="contact_input"
              name="password"
              type="password"
              required
            />
            <span class="bar"></span>
            <label className="contact_label">Password</label>
          </div>
          <div class="group">
            <input
              ref={passwordConfirmRef}
              className="contact_input"
              name="password"
              type="password"
              required
            />
            <span class="bar"></span>
            <label className="contact_label">Confirm Password</label>
          </div>
          <div className="login_button_wrap">
            <button type="submit">
              {loading ? "Creating user.." : "Register"}
            </button>
          </div>
        </form>
        <div className="social_wrapper">
          <p>or continue using</p>
          <div className="social_links">
            <FontAwesomeIcon
              onClick={handlegoogle}
              className="social_icons1"
              icon={faGoogle}
            />
            <FontAwesomeIcon className="social_icons2" icon={faFacebook} />
            <FontAwesomeIcon className="social_icons3" icon={faTwitter} />
          </div>
          Already have an account? <Link to="/login">Log In</Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Signup;
