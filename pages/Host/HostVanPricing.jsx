import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostAlbumPricing() {
    const { currentAlbum } = useOutletContext()
    return (
        <h3 className="host-album-price">${currentAlbum.price}<span>/day</span></h3>
    )
}