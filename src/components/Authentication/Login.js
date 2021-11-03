import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, signUp, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/");
    }
  }, [history]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
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
      <div className="login_card">
        <div className="login_header">
          <h4>
            <span> Welcome to </span>
            <br /> Sixty Ninth Street
          </h4>
        </div>
        <h5 className="text-center mb-4">Sign in to your account</h5>
        {error && <alert variant="danger">{error}</alert>}
        <form onSubmit={handleSubmit} className="login_content">
          <div class="group">
            <input
              ref={emailRef}
              className="contact_input"
              name="email"
              type="text"
              required
              autoComplete="off"
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
          <div className="login_button_wrap">
            <button type="submit">
              {loading ? "Logging you in" : "Log In"}
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
        </div>
        <div className="text-center mt-2">
          Create an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
