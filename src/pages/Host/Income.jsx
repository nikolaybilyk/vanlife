import React from "react"
import { requireAuth } from "../../utils"

export async function loader({ request }) {
    return requireAuth(request)
}

export default function Income() {
    return (
        <h1>Income component here</h1>
    )
}