import React from "react";

import globe from "../assets/images/globe.png"
export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={globe} alt="travel journal logo" />
            <h1 className="header__title">My Travel Journal</h1>
        </header>
    );
}