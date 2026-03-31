import React from 'react'
import{ Link } from "react-router-dom";
import "./home.css";

function Home() {
    return(
        <div className="auth-wrapper">
            <div className="auth-card">
                <div className="left-panel">
                    <h1>Welcome to Job Tracker!</h1>
                    <p>Track your job applications in one place.</p>
                    <ul>
                        <li>💼 Manage all your applications in one place</li>
                        <li>📅 Set deadlines & reminders</li>
                        <li>📊 Dashboard insights</li>
                    </ul>
                    <div className="home-btns">
                    <Link to="/register">
                        <button className="main-btn">Get Started</button>
                    </Link>
                    <Link to="/login">
                        <button className="ghost-btn">Login</button>
                    </Link>
                    </div>
                </div>
                <div className="right-panel">
                    <h1>Get Started!</h1>
                    <p>See your job applications at a glance and stay on top of your career journey.</p>
                    <img
                     src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="dashboard preview"
                    className="home-img"
                    />
                </div>
            </div>
        </div>
    )
}
export default Home;