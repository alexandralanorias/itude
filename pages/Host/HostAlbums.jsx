import React from "react"
import { Link } from "react-router-dom"

export default function HostAlbums() {
    const [albums, setAlbums] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/albums")
            .then(res => res.json())
            .then(data => setAlbums(data.albums))
    }, [])

    const hostAlbumsEls = albums.map(album => (
        <Link
            to={`/host/albums/${album.id}`}
            key={album.id}
            className="host-album-link-wrapper"
        >
            <div className="host-album-single" key={album.id}>
                <img src={album.imageUrl} alt={`Photo of ${album.name}`} />
                <div className="host-album-info">
                    <h3>{album.name}</h3>
                    <p>${album.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-albums-title">Your listed albums</h1>
            <div className="host-albums-list">
                {
                    albums.length > 0 ? (
                        <section>
                            {hostAlbumsEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}