import "./layout.css";
import {FaGithub,FaLinkedin} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>JobFlow</h3>
                    <p>Track your job applications with ease.</p>
                </div>
                <div className="footer-name">
                    <p>Created by Sanika Deshkar</p>
                </div>
                <div className="footer-socials">
                    <h4>Connect with me:</h4>
                    <div className="social-icons">
                    <a href="https://github.com/Sanika-deshkar" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/sanika-deshkar/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} JobFlow. All rights reserved.</p>
            </div>
        </footer>
    );
}