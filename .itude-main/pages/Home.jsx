import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the cash, we got the stash.</h1>
            <p>Listening, con brio. Rent or buy the perfect album and add it to your classical music repertoire.</p>
            <Link to="albums">Find your album</Link>
        </div>
    )
};