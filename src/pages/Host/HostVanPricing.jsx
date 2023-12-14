import React from "react" 
import { useOutletContext } from "react-router-dom"
import { requireAuth } from "../../utils"

export async function loader({request}) {
    return requireAuth(request)
}

export default function HostVanPricing() {
    const { van } = useOutletContext()

    return (
        <section>
            <span className="van-details-page-offer"><span className="van-details-page-price">${van.price}</span>/day</span>
        </section>
    )
}