import React from "react"
import bgImg from "../assets/images/about-hero.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a album.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel album rental. Our albums are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of albumlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your album is ready.</h2>
                <Link className="link-button" to="/albums">Explore our albums</Link>
            </div>
        </div>
    );
}