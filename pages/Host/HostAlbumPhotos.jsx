import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostAlbumPhotos() {
    const { currentAlbum } = useOutletContext()
    return (
        <img src={currentAlbum.imageUrl} className="host-album-detail-image" />
    )
}