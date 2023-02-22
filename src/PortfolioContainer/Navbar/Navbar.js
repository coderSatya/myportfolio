import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{marginLeft:'230px'}}>
    {/* <a className="navbar-brand" href="#">Satya Prakash</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a style={{fontWeight:"bold"}} className="nav-link active" id="profile-navbar" aria-current="page" href="#">Satya Prakash</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" id="profile-navbar" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" id="profile-navbar" aria-current="page" href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" id="profile-navbar" aria-current="page" href="#skill">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#projects">Certifications</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar