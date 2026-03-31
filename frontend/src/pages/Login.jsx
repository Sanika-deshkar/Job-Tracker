import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import API from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    try{
      const {data} = await API.post("/users/login",{email,password});
      //store token:
      localStorage.setItem("token",data.token);
      navigate("/dashboard");
    }catch(error){
      alert(error.response.data.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        {/* LEFT = FORM */}
        <div className="right-panel">
          <h1>Login</h1>

          <form onSubmit={submitHandler}>
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

            <button className="main-btn">Login</button>
          </form>
        </div>

        {/* RIGHT = RED PANEL */}
        <div className="left-panel">
          <h1>Hello, Friend!</h1>
          <p>Don't have an account?</p>
          <Link to="/register">
            <button className="ghost-btn">Register</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;