import React from "react";
import contactImg from "../../public/contactImg.svg";

function Contact(){
    return(
        <div className="contactBody">
            <div className="contactTop">
            <img className="contactImg" src={contactImg} alt=""/>
            <div className="contactContent">
            <p>tatafo</p>

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