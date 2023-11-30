import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function HostLayout() {
    return (
        <div className="container">
            <nav className="nav dashboard-nav">
                <NavLink
                    to="/host"
                    end
                    className={({ isActive }) => isActive ? "nav-item dashboard-nav-item dashboard-nav-item-selected" : "nav-item dashboard-nav-item"}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    className={({ isActive }) => isActive ? "nav-item dashboard-nav-item dashboard-nav-item-selected" : "nav-item dashboard-nav-item"}
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans"
                    className={({ isActive }) => isActive ? "nav-item dashboard-nav-item dashboard-nav-item-selected" : "nav-item dashboard-nav-item"}
                >
                    Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    className={({ isActive }) => isActive ? "nav-item dashboard-nav-item dashboard-nav-item-selected" : "nav-item dashboard-nav-item"}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}