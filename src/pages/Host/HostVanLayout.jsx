import React from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import getVans from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ params, request }) {
    await requireAuth(request)
    return getVans(params.id)
}

export default function HostVanLayout() {
    const van = useLoaderData()
    
    return (
        <>
            <Link
                to=".."
                relative="path"
            >
                Back to all vans
            </Link>
            <div className="host-van-detail-card">
                <img src={van.imageUrl} alt={van.name} />
                <div className="host-van-detail-card-info">
                    <span className="van-card-badge">{van.type}</span>
                    <h3 className="host-van-card-title">{van.name}</h3>
                    <span className="van-details-page-offer"><span className="van-details-page-price">${van.price}</span>/day</span>
                </div>
                <nav className="nav dashboard-nav">
                    <NavLink
                        to="."
                        end
                        className={({ isActive }) => isActive ? "nav-item dashboard-nav-item dashboard-nav-item-selected" : "nav-item dashboard-nav-item"}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        className={({ isActive }) => isActive ? "nav-item dashboard-nav-item dashboard-nav-item-selected" : "nav-item dashboard-nav-item"}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        className={({ isActive }) => isActive ? "nav-item dashboard-nav-item dashboard-nav-item-selected" : "nav-item dashboard-nav-item"}
                    >
                        Photos
                    </NavLink>
                </nav>
            </div>
            <Outlet context={{ van }}/>
        </>
    )
}