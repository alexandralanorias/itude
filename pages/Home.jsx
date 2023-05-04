import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel albums.</h1>
            <p>Add adventure to your life by joining the #albumlife movement. Rent the perfect album to make your perfect road trip.</p>
            <Link to="albums">Find your album</Link>
        </div>
    )
};