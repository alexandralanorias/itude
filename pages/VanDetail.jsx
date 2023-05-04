import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const [album, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/albums/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.albums))
    }, [params.id])

    return (
        <div className="album-detail-container">
            {album ? (
                <div className="album-detail">
                    <img src={album.imageUrl} />
                    <i className={`album-type ${album.type} selected`}>
                        {album.type}
                    </i>
                    <h2>{album.name}</h2>
                    <p className="album-price"><span>${album.price}</span>/day</p>
                    <p>{album.description}</p>
                    <button className="link-button">Rent this album</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}