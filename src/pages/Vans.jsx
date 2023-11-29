import React from "react"
import vansData from "../server"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const [ vans, setVans ] = React.useState(vansData)

    React.useEffect(() => {
        setVans(vansData)
    }, [])

    const displayedVans = typeFilter
        ? vans.filter( van => van.type === typeFilter)
        : vans

    const vansElements = displayedVans.map(van => {
        return (
            <Link to={`${van.id}`} key={van.id}>
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

    function handleFilterChange(key, value) {
        setSearchParams(prevSearchParams => {
            if (!value) {
                prevSearchParams.delete(key)
            } else {
                prevSearchParams.set(key, value)
            }
            return prevSearchParams
        })
    }
    
    return (
        <main className="vans">
            <div className="container vans-container">
                <h2 className="title vans-title">Explore our van options</h2>
                <div className="vans-filters-block">
                    <button
                        onClick={() => handleFilterChange("type", "simple")}
                        className={
                            `vans-filter simple ${typeFilter === "simple" ? "selected-filter" : ""}`
                        }
                    >
                        Simple
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "luxury")}
                        className={
                            `vans-filter luxury ${typeFilter === "luxury" ? "selected-filter" : ""}`
                        }
                    >
                        Luxury
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "rugged")}
                        className={
                            `vans-filter rugged ${typeFilter === "rugged" ? "selected-filter" : ""}`
                        }
                    >
                        Rugged
                    </button>
                    { 
                        typeFilter && 
                        <button
                            onClick={() => handleFilterChange("type", null)}
                            className="vans-clear-filters"
                        >
                            Clear filters
                        </button>
                    }
                </div>
                <div className="vans-block">
                    {vans ? vansElements : <h2>Loading...</h2>}
                </div>
            </div>
        </main>
    )
}