import React from "react";
import contactImg from "../../public/contactImg.svg";
import instagramImg from "../../public/instagram-brands.svg";
import facebookImg from "../../public/facebook-brands.svg";
import twitterImg from "../../public/twitter-brands.svg";

function Contact(){
    return(
        <div className="contactBody">
            <div className="contact">
            <img className="contactImg" src={contactImg} alt=""/>
            <div className="contactText">
            <h1>Contact us at:</h1>
            <img className="contactLogo" src={facebookImg} alt=""/>
            <p>@tatafoBlog</p>
            <img className="contactLogo" src={instagramImg} alt=""/>
            <p>@theofficialtatafoblog</p>
            <img className="contactLogo" src={twitterImg} alt=""/>
            <p>@tatafo_blog</p>
            

            </div>
            </div>
        
            <div className="seventh-division contactSeven">
  <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
 <a className="footer-link" href="https://twitter.com/">Twitter</a>
 <a className="footer-link" href="http://uyi.com">Website</a>
 <p className="last">© 2020 <span class="last-last">Omoruyi Ohuoba.</span> All Rights Reserved.</p>
</div>
        </div>
    )
}

export default Contact;