import React from "react";
import "../style.css"
import logo from "../image/logo.jpg";

function Header(){
    return <div className="header">
        <img className="hleft" src={logo} alt="logo" />
        <p className="heading">Header</p>
    </div>
}

export default Header;