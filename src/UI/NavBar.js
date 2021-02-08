import React from "react"
import {Link, NavLink, Route} from "react-router-dom";

const NavBar = props => {
    return (
        <nav>
            <div className="nav-wrapper" style={{padding: '0 20px'}}>
                <NavLink to="/" className="brand-logo">Logo</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Pokemons</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar