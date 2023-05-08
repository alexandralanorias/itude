import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"

export default function HostAlbumDetail() {
    const { id } = useParams()
    const [currentAlbum, setCurrentAlbum] = React.useState(null)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
        fetch(`/api/host/albums/${id}`)
            .then(res => res.json())
            .then(data => setCurrentAlbum(data.albums))
    }, [])

    if (!currentAlbum) {
        return <h1>Loading...</h1>
    }
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all albums</span></Link>

            <div className="host-album-detail-layout-container">
                <div className="host-album-detail">
                    <img src={currentAlbum.imageUrl} />
                    <div className="host-album-detail-info-text">
                        <i
                            className={`album-type album-type-${currentAlbum.type}`}
                        >
                            {currentAlbum.type}
                        </i>
                        <h3>{currentAlbum.name}</h3>
                        <h4>${currentAlbum.price}/day</h4>
                    </div>
                </div>

                <nav className="host-album-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentAlbum }} />
            </div>
        </section>
    )
}

/**
 * Challenge: check out the docs linked in the slide, and see if you
 * can implement the Outlet Context feature it talks about.
 * 
 * Part of this challenge will require you to (finally) build out those
 * nested components. Again, if you don't need CSS practice, you can
 * skip the styling part, and I'll handle that for you.
 */