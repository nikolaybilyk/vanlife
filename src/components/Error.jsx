import React from "react"
import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()

    return (
        <div className="container">
            <h1>Oops, sorry! {error.message}</h1>
            <pre>{error.status ? error.status : "Unknown status number"} - {error.statusText ? error.statusText : "Unknown status text"}</pre>
        </div>
    )
}