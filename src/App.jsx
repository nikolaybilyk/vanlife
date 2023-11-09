import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

export default function App() {
    return (
        <BrowserRouter>
            <header className="header">
                <Link to="/" className="logo">#VANLIFE</Link>
                <nav className="nav">
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/vans" className="nav-item">Vans</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />}/>
            </Routes>
            <footer className="footer">
                <p className="footer-text">Ⓒ 2022 #VANLIFE</p>
            </footer>
        </BrowserRouter>
    )
}