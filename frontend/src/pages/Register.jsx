import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import API from "../api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    setError("");
    try{
      await API.post("/users/register",{name,email,password});
      navigate("/login", { state: { registered: true } });
    }
    catch(error){
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <div className="left-panel">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <Link to="/login">
            <button className="ghost-btn">Sign In</button>
          </Link>
        </div>

        <div className="right-panel">
          <h1>Create Account</h1>

          {error && <p className="form-error">{error}</p>}

          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="main-btn">Sign Up</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Register;
