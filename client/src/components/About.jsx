import React from "react";
import aboutImg from "../../public/aboutImg.svg";
function About(){
    return(
        <div className="">
            <div className= "company-card">
                <img className="cardImg" src={aboutImg} alt=""/>
                <div className="container">
                    <p>A blog for gossipers, by gossipers, to gossipers</p>
                </div>
            </div>
        </div>
    )
}

export default About;