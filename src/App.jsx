import React from "react"
import { 
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader} from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import HostLayout from "./pages/Host/HostLayout"
import Dashboard, { loader as dashboardLoader} from "./pages/Host/Dashboard"
import Income, { loader as incomeLoader } from "./pages/Host/Income"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans"
import HostVanLayout, { loader as hostVanLayoutLoader } from "./pages/Host/HostVanLayout"
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail"
import HostVanPricing, { loader as hostVanPricingLoader } from "./pages/Host/HostVanPricing"
import HostVanPhotos, { loader as hostVanPhotosLoader } from "./pages/Host/HostVanPhotos"
import Reviews, { loader as reviewsLoader } from "./pages/Host/Reviews"
import NotFound from "./pages/NotFound"
import Error from "./components/Error"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login"
// localStorage.removeItem("isLoggedIn")

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
        <Route path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
        <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} loader={dashboardLoader} />
            <Route path="income" element={<Income />} loader={incomeLoader} />
            <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
            <Route path="vans/:id" element={<HostVanLayout />} loader={hostVanLayoutLoader}>
                <Route index element={<HostVanDetail />} loader={hostVanDetailLoader} />
                <Route path="pricing" element={<HostVanPricing />} loader={hostVanPricingLoader} />
                <Route path="photos" element={<HostVanPhotos />} loader={hostVanPhotosLoader} />
            </Route>
            <Route path="reviews" element={<Reviews />} loader={reviewsLoader} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}