import React from "react"
import { Link, NavLink } from "react-router-dom"
import userIconUrl from "../assets/user-icon.svg"

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">#VANLIFE</Link>
            <nav className="nav">
                <NavLink
                    to="host"
                    className={({ isActive }) => isActive ? "nav-item nav-item-selected" : "nav-item"}
                >
                    Host
                </NavLink>
                <NavLink
                    to="about"
                    className={({ isActive }) => isActive ? "nav-item nav-item-selected" : "nav-item"}
                >
                    About
                </NavLink>
                <NavLink
                    to="vans"
                    className={({ isActive }) => isActive ? "nav-item nav-item-selected" : "nav-item"}
                >
                    Vans
                </NavLink>
                <Link to="login">
                    <img src={userIconUrl} />
                </Link>
            </nav>
        </header>
    )
}