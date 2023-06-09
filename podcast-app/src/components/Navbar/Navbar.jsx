import React from "react";
import Searchbar from "../searchbar/Searchbar";
import { Link } from "react-router-dom";
import "./Navbar.css"


export default function Navbar(){

    return(
      
        <nav className="navbar">
            <h2 className="nav-logo">Unplugged</h2>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
    )
}