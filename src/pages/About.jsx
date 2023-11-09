import React from "react"
import { Link } from "react-router-dom"
import aboutTitlePhoto from "../assets/about-title-photo.png"

export default function About() {
    return (
        <main className="about">
            <img src={aboutTitlePhoto} alt="man sitting on his van and looking at the night sky" />
            <div className="container">
                <h2 className="title about-title">Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p className="about-text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className="about-text">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="promo-block">
                    <h3 className="promo-block-title">Your destination is waiting. Your van is ready.</h3>
                    <Link to="/vans" className="btn secondary-btn about-page-btn">Explore our vans</Link>
                </div>
            </div>
        </main>
    )
}