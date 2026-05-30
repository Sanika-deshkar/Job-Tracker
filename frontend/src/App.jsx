import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
      <Header />
      <main className="page-content">
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;