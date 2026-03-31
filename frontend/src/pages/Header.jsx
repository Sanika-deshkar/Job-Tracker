import {Link} from "react-router-dom";
import "./layout.css";

export default function Header() {
    return (
        <header className="app-header">
            <div className="header-container">
                <h2 className="header-brand">
                    JobFlow📝
                </h2>
                <nav className="nav-links">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </header>
    );
}