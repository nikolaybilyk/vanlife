import React from "react"
import { Link, useLocation, useLoaderData } from "react-router-dom"
import getVans from "../../api"

export function loader({ params }) {
    return getVans(params.id)
}

export default function VanDetail() {
    const location = useLocation()
    const searchedVanType = location.state?.type || "all"
    
    const van = useLoaderData()
    
    return (
        <main>
            <div className="container">
            <Link
                to={`..?${location.state?.search || ""}`}
                relative="path"
            >
                {`Back to ${searchedVanType} vans`}
            </Link>
                <div className="van-details van-detail-container">
                    <img className="van-details-page-photo" src={van.imageUrl} alt={van.name} />
                    <span className="van-card-badge">{van.type}</span>
                    <h2 className="title">{van.name}</h2>
                    <span className="van-details-page-offer"><span className="van-details-page-price">${van.price}</span>/day</span>
                    <p className="van-details-page-description">{van.description}</p>
                    <Link to="" className="btn accent-btn home-page-btn van-details-page-btn">Rent this van</Link>
                </div>
            </div>
        </main>
    )
}