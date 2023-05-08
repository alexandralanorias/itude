import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostAlbumInfo() {
    const { currentAlbum } = useOutletContext()
    
    return (
        <section className="host-album-detail-info">
            <h4>Name: <span>{currentAlbum.name}</span></h4>
            <h4>Category: <span>{currentAlbum.type}</span></h4>
            <h4>Description: <span>{currentAlbum.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}