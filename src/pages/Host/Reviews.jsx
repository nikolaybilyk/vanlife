import React from "react"
import { requireAuth } from "../../utils"

export async function loader({ request }) {
    return requireAuth(request)
}

export default function Reviews() {
    return (
        <h1>Reviews component here</h1>
    )
}