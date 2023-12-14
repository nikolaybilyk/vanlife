import React from "react"
import {
    Link,
    Await,
    useLoaderData,
    defer
} from "react-router-dom"
import getVans from "../../api"
import { requireAuth } from "../../utils"

export async function loader({request}) {
    await requireAuth(request)
    return defer({ vansDataPromise: getVans()})
}

export default function HostVans() {
    const { vansDataPromise } = useLoaderData()

    function renderVansElements(vans) {
        return vans.map( van => {
            return (
                <Link
                    key={van.id}
                    to={`${van.id}`}
                >
                    <div className="host-van-carad">
                        <img
                            className="host-van-card-image"
                            src={van.imageUrl}
                            alt={van.name}
                        />
                        <div className="host-van-card-description">
                            <h3 className="host-van-card-name">{van.name}</h3>
                            <span className="host-van-card-price">{van.price}/day</span>
                        </div>
                    </div>
                </Link>
            )
        })
    }


    return (
        <>
            <h2 className="title">Your listed vans</h2>
            <React.Suspense fallback={<h2>Loading your vans...</h2>}>
                <Await resolve={vansDataPromise}>
                    {renderVansElements}
                </Await>
            </React.Suspense>
        </>
    )
}