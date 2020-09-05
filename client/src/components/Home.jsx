import React from "react";
import News from "../../public/news.svg";
import Gossip from "../../public/gossip.svg";
import Fashion from "../../public/fashion.svg";
import Cnn from "../../public/cnn-1.svg";
import Bbc from "../../public/bbc-2.svg";
import Nasa from "../../public/nasa-6.svg";
import Nyt from "../../public/nyt.png";
import Wsj from "../../public/wsj.png";
import Tc from "../../public/tc.png";
import Cn from "../../public/cn.png";
import Bc from "../../public/bc.png";
import Pc from "../../public/pc.png";
import Tr from "../../public/tr.png";
import Fb from "../../public/fb.png";
import Hp from "../../public/hp.png";
import Carousel from "./Layout/Carousel";

function Home(){
    return(
        <div>
        <div className ="first">
            <h1 className="heading">  Tatafo blog </h1>
        </div>
<div className="start">
<h2> Latest Posts</h2>

<br/>

<Carousel/>
<br/>
<br/>
<div class="wrap">
  <a href="/articles"><button class="button subscribe">Read</button> </a>
</div>
</div>
<div className="top-of-third-division arc">

</div>
<div className= "third-division">
        <div className="news">
        <img className="newsImg cartoon" src={News} alt="news "/>
        <h3>News</h3>
        <p> Get all the lastest news first right in the palm of your hands as soon as it breaks. If it's out there, it's right here. Specially suited. Just for you our tatafo!</p>
        </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={Gossip} alt="gossip "/>
            <h3> Gossip</h3>
            <p>We got all the juiciest gossip right here. We don't care if the gist is true or false. It's none of our business abeg. Once it trends, it's here fam.</p>
        </div>
        <div className="fashion">
              <br/>
            <br/>
            <img className="fashionImg cartoon"src={Fashion} alt="fashion "/>
            <div className="fashionText"><h3>Fashion</h3>
            <p>You know we just had to add this section. We're steady showing you how to drip, you obviously need it smh...</p></div>

            

        </div>
<br/>
</div> 
<div className="bottom-of-third-division arc">

</div>
<div className="fourth-division"> 
        <hr/>
        <br/>
        <h2 className="">Why Us?</h2>
        <br/>
        <br/>
        <div className="companies">
             <div className="company-card">
                <img className="cardImg" src={Cnn} alt="cnn logo"/>
                <div className="container">
                    <p className="writing"> "Tatafo blog; best blog world-wide"</p>
                </div>
             </div>
             <div className="company-card">
                <img className="cardImg" src={Nasa} alt="card"/>
                <div className="container">
                    <p> "Astronauts confirm Universe's no 1 blog"</p>
                </div>            
             </div>
             <div className="company-card">
                <img className="cardImg" src={Bbc} alt="bbc logo"/>
                <div className= "container">
                    <p> "We always look up to Uyi's blog"</p>
                </div>
             </div>
        </div>
</div>
<div className="top-of-fifth-division arc">

</div>
<div className="fifth-division">
    <img className="dark" src={Nyt} alt="new york times logo"/>
    <img className="dark" src={Wsj} alt="wsj logo"/>
    <img className="dark" src={Tc} alt="tc logo"/>
    <img className="dark" src={Tr} alt="tr logo"/>
    <img className="dark" src={Bc} alt="Bc logo"/>
    <img className="dark" src={Pc} alt="Pc logo"/>
    <img className="dark" src={Cn} alt="Cn logo"/>
    <img className="dark" src={Fb} alt="Fb logo"/>
    <img className="dark" src={Hp} alt="Hp logo"/>

</div>
<div className="sixth-division">
    <p> Sign up today! </p>
    <div class="wrap">
    <a href="/articles"><button class="button subscribe">Read</button> </a>
</div>
</div>
<div className="seventh-division">
        <br/>
         <a className="footer-link" href="https://github.com/OmoruyiOhuoba">GitHub</a>
        <a className="footer-link" href="https://omoruyiohuoba.com/">Website</a>
        <a className="footer-link" href="https://twitter.com/OmoruyiOhuoba">Twitter</a>
        <p >© {new Date().getFullYear()}  <span class="last-last">Omoruyi Ohuoba.</span> All Rights Reserved.</p>
</div>

</div>

           
       
 
    

);
}

export default Home;
