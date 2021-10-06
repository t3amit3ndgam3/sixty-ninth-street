import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
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
  return (
    <div className="login_wrapper">
      <div className="login_card">
        <div className="login_header">
          <h2>
            <span> Welcome to </span>
            <br /> Sixty Ninth Street
          </h2>
        </div>
        <h4 className="text-center mb-4">Sign in to your account</h4>
        {error && <alert variant="danger">{error}</alert>}
        <form onSubmit={handleSubmit} className="login_content">
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
          <div className="login_button_wrap">
            <button type="submit">
              {loading ? "Logging you in" : "Log In"}
            </button>
          </div>
        </form>
        <div className="text-center mt-2">
          Create an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
