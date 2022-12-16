import React from 'react';
import { NavLink, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import car from '../assets/Logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand" href="#" to="/">
                    <img src={car} alt="logo" width="80" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        {/* WEATHERAPI */}
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Viborg Haveservice</span>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/viborghaveservice1">Velkommen</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/viborghaveservice2">Alle ydelser</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/viborghaveserviceAdmin">Admin</NavLink></li>
                            </ul>
                        </li>
   
                        {/* WEATHERAPI */}
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Vejret</span>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/Weather">Søg efter vejret via postnummer</NavLink></li>
                            </ul>
                        </li>

                        {/* NEWSAPI */}
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nyheder</span>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/News">News</NavLink></li>
                            </ul>
                        </li>

                        {/* Energi */}
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Energi</span>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/Energidata">Energipriser</NavLink></li>
                            </ul>
                        </li>

                        {/* Selvvalgt API */}
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Selvvalgt API</span>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/Quotes">Get a quote!</NavLink></li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar