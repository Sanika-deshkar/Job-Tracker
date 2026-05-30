import { Link } from "react-router-dom";
import { FaBriefcase, FaChartBar, FaLock, FaGithub } from "react-icons/fa";
import "./about.css";

export default function About() {
    return (
        <div className="about-wrapper">
            <div className="about-hero">
                <h1>About JobFlow</h1>
                <p>A simple, focused tool to help you stay on top of your job search — built by a student, for students.</p>
            </div>

            <div className="about-grid">
                <div className="about-card">
                    <span className="about-icon"><FaBriefcase /></span>
                    <h3>Track Applications</h3>
                    <p>Add every job you apply to with company, role, status, and notes — all in one place.</p>
                </div>
                <div className="about-card">
                    <span className="about-icon"><FaChartBar /></span>
                    <h3>Stay Organised</h3>
                    <p>Filter by status, search by company, and paginate through your applications with ease.</p>
                </div>
                <div className="about-card">
                    <span className="about-icon"><FaLock /></span>
                    <h3>Secure & Private</h3>
                    <p>Your data is protected with JWT authentication. Only you can see your applications.</p>
                </div>
                <div className="about-card">
                    <span className="about-icon"><FaGithub /></span>
                    <h3>Open Source</h3>
                    <p>Built transparently and open for contribution. Free to use forever — no hidden costs or subscriptions.</p>
                </div>
            </div>

            <div className="about-cta">
                <h2>Ready to track your career?</h2>
                <div className="about-buttons">
                    <Link to="/register"><button className="about-main-btn">Get Started</button></Link>
                    <Link to="/login"><button className="about-ghost-btn">Login</button></Link>
                </div>
            </div>
        </div>
    );
}
