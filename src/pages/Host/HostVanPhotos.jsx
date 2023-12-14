import React from "react"
import { useOutletContext } from "react-router-dom"
import { requireAuth } from "../../utils"

export async function loader({request}) {
    return requireAuth(request)
}

export default function HostVanPhotos() {
    const { van } = useOutletContext()

    return (
        <section>
            <img src={van.imageUrl} alt={van.name} />
        </section>
    )
}