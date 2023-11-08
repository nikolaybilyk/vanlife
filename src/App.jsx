import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {
    return (
        <BrowserRouter>
            <header className="header">
                <Link to="/" className="logo">#VANLIFE</Link>
                <nav className="nav">
                    <Link to="/about" className="nav-item">About</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <footer className="footer">
                <p className="footer-text">Ⓒ 2022 #VANLIFE</p>
            </footer>
        </BrowserRouter>
    )
}