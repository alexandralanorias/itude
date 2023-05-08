import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Albums from "./pages/Albums/Albums"
import AlbumDetail from "./pages/Albums/AlbumDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostAlbums from "./pages/Host/HostAlbums"
import HostAlbumDetail from "./pages/Host/HostAlbumDetail"
import HostAlbumInfo from "./pages/Host/HostAlbumInfo"
import HostAlbumPricing from "./pages/Host/HostAlbumPricing"
import HostAlbumPhotos from "./pages/Host/HostAlbumPhotos"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="albums" element={<Albums />} />
          <Route path="albums/:id" element={<AlbumDetail />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="albums" element={<HostAlbums />} />
            <Route path="albums/:id" element={<HostAlbumDetail />}>
              <Route index element={<HostAlbumInfo />} />
              <Route path="pricing" element={<HostAlbumPricing />} />
              <Route path="photos" element={<HostAlbumPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);