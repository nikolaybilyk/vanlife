import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanDetail() {
    const { van } =  useOutletContext()

    return (
        <section>
            <h4>Name: <span className="host-van-card-detailed-info">{van.name}</span></h4>
            <h4>Category: <span className="host-van-card-detailed-info">{van.type}</span></h4>
            <h4>Description: <span className="host-van-card-detailed-info">{van.description}</span></h4>
            <h4>Visibility: <span className="host-van-card-detailed-info">public</span></h4>
        </section>
    )
}