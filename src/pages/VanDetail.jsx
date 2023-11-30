import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import vansData from "../server"

export default function VanDetail() {
    const params = useParams()
    const [ van, setVan ] = React.useState(null)
    const location = useLocation()
    const searchedVanType = location.state?.type || "all"
    
    React.useEffect(() => {
        vansData.map(van => {
            if (van.id === params.id) {
                setVan(van)
            }
        })
    }, [params])

    
    return (
        <main>
            <div className="container">
            <Link
                to={`..?${location.state?.search || ""}`}
                relative="path"
            >
                {`Back to ${searchedVanType} vans`}
            </Link>
            { van ? (
                    <div className="van-details van-detail-container">
                        <img className="van-details-page-photo" src={van.imageUrl} alt={van.name} />
                        <span className="van-card-badge">{van.type}</span>
                        <h2 className="title">{van.name}</h2>
                        <span className="van-details-page-offer"><span className="van-details-page-price">${van.price}</span>/day</span>
                        <p className="van-details-page-description">{van.description}</p>
                        <Link to="" className="btn accent-btn home-page-btn van-details-page-btn">Rent this van</Link>
                    </div>
                ) : <h2>Loading...</h2>}
            </div>
        </main>
    )
}