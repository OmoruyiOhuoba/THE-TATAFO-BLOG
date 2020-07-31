import React from "react";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <div>
        <div className= "topest">
                <ul>
                   <li><Link to="/about" className="nav"> About</Link></li>
                    <li><Link to="/home" className="nav"> Home </Link> </li>
                    <li><Link to="/articles" className="nav">Articles</Link></li>
                    <li><Link to="/addarticle" className="nav"> Add-Article </Link></li>
                    <li><Link to="/contact" className="nav"> Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;