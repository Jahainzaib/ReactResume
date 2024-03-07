import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="text-primary fw-bold m-0">SMJ</h1>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <a href="index.html#home" className="nav-item nav-link active">Home</a>
                <a href="index.html#about" className="nav-item nav-link">About</a>
                <a href="index.html#skill" className="nav-item nav-link">Skills</a>
            </div>
            <a href="index.html" className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                <h1 className="text-primary fw-bold m-0">SMJ</h1>
            </a>
            <div className="navbar-nav me-auto py-0">
                <a href="index.html#service" className="nav-item nav-link">Services</a>
                <a href="index.html#project" className="nav-item nav-link">Projects</a>
                <a href="index.html#contact" className="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav></>
  )
}
