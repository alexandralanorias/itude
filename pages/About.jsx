import React from "react"
import bgImg from "../assets/images/about-hero.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Can't find the perfect place to grab a classical track?</h1>
                <p>Worry no more! Our mission is to add a dramatic flair to your listening experience with the perfect classical recording. From Bach to Beethoven, Mozart to Chopin, and even Shostakovich to Bartók, our albums are tried and tested must-haves for classical music enthusiasts on the search for a new rental or even purchase. (Purchases cost extra 😉)</p>
                <p>Our team is full of classical music aficionados who know firsthand the magic of listening to, take for example, a vinyl recording of Tchaikovsky's Fifth Symphony in E minor, performed by the New York Philharmonic under the skillful baton of Leonard Bernstein.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your listening experience is waiting.<br />Your album is ready.</h2>
                <Link className="link-button" to="/albums">Explore our albums</Link>
            </div>
        </div>
    );
}