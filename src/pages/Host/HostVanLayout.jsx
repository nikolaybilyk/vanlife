import React from "react"
import {
    Link,
    NavLink,
    Outlet,
    Await,
    useLoaderData,
    defer
} from "react-router-dom"
import { getVan } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ params, request }) {
    await requireAuth(request)
    return defer({ vanDataPromise: getVan(params.id)})
}

export default function HostVanLayout() {
    const { vanDataPromise } = useLoaderData()
    
    return (
        <>
            <Link
                to=".."
                relative="path"
            >
                Back to all vans
            </Link>
            <React.Suspense fallback={<h2>Loading your van data...</h2>}>
            <Await resolve={vanDataPromise}>
                {(van) => (
                    <>
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
                )}
            </Await>
            </React.Suspense>
        </>
    )
}