import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()

    return (
        <main>
            <h1>{`${params.id}`}</h1>
        </main>
    )
}