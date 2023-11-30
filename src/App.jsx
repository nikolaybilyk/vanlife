import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import HostLayout from "./pages/HostLayout"
import Dashboard from "./pages/Dashboard"
import Income from "./pages/Income"
import HostVans from "./pages/HostVans"
import HostVanLayout from "./pages/HostVanLayout"
import HostVanDetail from "./pages/HostVanDetail"
import HostVanPricing from "./pages/HostVanPricing"
import HostVanPhotos from "./pages/HostVanPhotos"
import Reviews from "./pages/Reviews"
import NotFound from "./pages/NotFound"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />}/>
                    <Route path="vans/:id" element={<VanDetail />} />
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} / >
                        <Route path="income" element={<Income />}/>
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVanLayout />}>
                            <Route index element={<HostVanDetail />} />
                            <Route path="pricing" element={<HostVanPricing />} />
                            <Route path="photos" element={<HostVanPhotos />} />
                        </Route>
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}