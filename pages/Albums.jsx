import React from "react"
import { Link } from "react-router-dom"

export default function Albums() {
    const [albums, setAlbums] = React.useState([])
    React.useEffect(() => {
        fetch("/api/albums")
            .then(res => res.json())
            .then(data => setAlbums(data.albums))
    }, [])

    const albumElements = albums.map(album => (
        <div key={album.id} className="album-tile">
            <Link to={`/albums/${album.id}`}>
                <img src={album.imageUrl} />
                <div className="album-info">
                    <h3>{album.name}</h3>
                    <p>${album.price}<span>/day</span></p>
                </div>
                <i className={`album-type ${album.type} selected`}>{album.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="album-list-container">
            <h1>Explore our album options</h1>
            <div className="album-list">
                {albumElements}
            </div>
        </div>
    )
}