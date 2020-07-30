import React from "react";
import aboutImg from "../../public/aboutImg.svg";
function About(){
    return(
        <div className= "aboutBody">
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="aboutTatafo">Tatafo Blog</h1>
        <div className="about">
                <img className="aboutImg" src={aboutImg} alt=""/>
                <div className="aboutText">
                    <p>"A blog for gossipers, by gossipers, to gossipers"</p>
            </div>
        </div>
        <div className="seventh-division aboutSeven">
  <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
 <a className="footer-link" href="https://twitter.com/">Twitter</a>
 <a className="footer-link" href="http://uyi.com">Website</a>
 <p className="last">© 2020 <span class="last-last">Omoruyi Ohuoba.</span> All Rights Reserved.</p>
</div>

    
        </div>
        
    )
}

export default About;