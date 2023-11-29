import React from "react" 
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { van } = useOutletContext()

    return (
        <section>
            <span className="van-details-page-offer"><span className="van-details-page-price">${van.price}</span>/day</span>
        </section>
    )
}