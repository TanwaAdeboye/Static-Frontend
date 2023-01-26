import React from "react"
import pic from "../images/Group.png"

export default function Navbar(){
    return (
        <nav>
            <img src = {pic} className= "nav_icon"/>
            <h3 className="nav_logo_text">ReactFacts</h3>
            <h4 className="nav_title">React Course - Project 1</h4>
        </nav>
    )
}
