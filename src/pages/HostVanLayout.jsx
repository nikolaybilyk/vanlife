import React from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import vansData from "../server"

export default function HostVanLayout() {
    const params = useParams()
    const [ van, setVan ] = React.useState(null)

    React.useEffect(() => {
        vansData.map( van => {
            if (van.id === params.id) {
                setVan(van)
            }
        })
    }, [params])
    
    return (
        <>
            <Link
                to=".."
                relative="path"
            >
                Back to all vans
            </Link>
            { van ? (
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
            ) : <h2>Loading...</h2>}
        </>
    )
}