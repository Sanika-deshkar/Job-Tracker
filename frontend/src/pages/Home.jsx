import React from 'react'
import { Link } from "react-router-dom";
import { FaBriefcase, FaCalendarAlt, FaChartBar } from "react-icons/fa";
import "./home.css";

function Home() {
    return (
        <div className="home-wrapper">
            <div className="home-card">
                <div className="home-left">
                    <h1>Land your next job faster.</h1>
                    <p>Track every application, stay organised, and never miss a follow-up again.</p>

                    <ul className="home-features">
                        <li>
                            <span className="feature-icon"><FaBriefcase /></span>
                            Manage all your applications in one place
                        </li>
                        <li>
                            <span className="feature-icon"><FaCalendarAlt /></span>
                            Set deadlines &amp; reminders
                        </li>
                        <li>
                            <span className="feature-icon"><FaChartBar /></span>
                            Dashboard insights at a glance
                        </li>
                    </ul>

                    <div className="home-buttons">
                        <Link to="/register">
                            <button className="home-main-btn">Get Started</button>
                        </Link>
                        <Link to="/login">
                            <button className="home-ghost-btn">Login</button>
                        </Link>
                    </div>
                </div>

                <div className="home-right">
                    <h1>Your career, organised.</h1>
                    <p>See every application at a glance and stay on top of your job search journey.</p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="dashboard preview"
                        className="home-img"
                    />
                    <div className="home-stats">
                        <div className="stat-box">
                            <div className="stat-num">100%</div>
                            <div className="stat-label">Free to use</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-num">∞</div>
                            <div className="stat-label">Applications</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-num">4</div>
                            <div className="stat-label">Status stages</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
