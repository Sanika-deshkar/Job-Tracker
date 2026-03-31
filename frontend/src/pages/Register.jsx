import { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import API from "../api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async(e) => {
    e.preventDefault();
    try{
      await API.post("/users/register",{name,email,password});
      alert("Registerd successfully!");
      Navigate("/");
    }
    catch(error){
      alert(error.response.data.message);
    };
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