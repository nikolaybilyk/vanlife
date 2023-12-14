import React from "react"
import { Outlet } from "react-router-dom"
import { requireAuth } from "../../utils"

export async function loader({ request }) {
    return requireAuth(request)
}

export default function Dashboard() {
    return (
        <>
            <h1>Dashboard component here</h1>
            <Outlet />
        </>
    )
}