import React from "react"
import vansData from "../server"
import { Link } from "react-router-dom"

export default function Vans() {
    const [ vans, setVans ] = React.useState(vansData)

    const vansElements = vans.map(van => {
        return (
            <Link to={`/vans/${van.id}`} key={van.id}>
                <div className="van-card">
                    <img src={van.imageUrl} alt="van image" className="van-card-img"/>
                    <div>
                        <h3 className="van-card-name">{van.name}</h3>
                        <span className="van-card-badge">{van.type}</span>
                    </div>
                    <span className="van-card-offer"><span className="van-card-price">${van.price}</span>/day</span>
                </div>
            </Link>
        )
    })

    return (
        <main className="vans">
            <div className="container">
                <h2 className="title vans-title">Explore our van options</h2>
                <div className="vans-filters-block">
                    <span className="van-filter">Simple</span>
                    <span className="van-filter">Luxury</span>
                    <span className="van-filter">Rugged</span>
                </div>
                <div className="vans-block">
                    {vansElements}
                </div>
            </div>
        </main>
    )
}