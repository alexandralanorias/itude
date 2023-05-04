import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">&lt;&nbsp;ITUDE</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/albums">Albums</Link>
            </nav>
        </header>
    )
}