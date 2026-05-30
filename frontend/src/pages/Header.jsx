import { Link, useLocation, useNavigate } from "react-router-dom";
import "./layout.css";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");
    const path = location.pathname;
    const isAuthPage = path === "/login" || path === "/register";
    const isDashboard = path === "/dashboard";

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("token");
            navigate("/");
        }
    };

    return (
        <header className="app-header">
            <div className="header-container">
                <h2 className="header-brand">JobFlow📝</h2>
                <nav className="nav-links">
                    {isAuthPage && <Link to="/">Home</Link>}

                    {!isDashboard && !isAuthPage && (
                        <>
                            <Link to="/">Home</Link>
                            {isLoggedIn
                                ? <Link to="/dashboard">Dashboard</Link>
                                : <Link to="/login">Login</Link>
                            }
                        </>
                    )}

                    <Link to="/about">About Us</Link>

                    {isDashboard && (
                        <button className="nav-logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
}
