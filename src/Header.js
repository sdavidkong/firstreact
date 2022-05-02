import React from "react";
import Logo from "./react-logo.png"


export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={Logo} width="40px" className="nav-logo" alt="" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}