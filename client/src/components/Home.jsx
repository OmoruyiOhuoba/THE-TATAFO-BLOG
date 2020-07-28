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

function Home(){
    return(
        <div>
        <div className ="first">
            <h1 className="heading">  Tatafo blog </h1>
        </div>
<div className="start">
<h2> Latest Posts</h2>

<br/>

 <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

<div className="controls-top">
<a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left"></i></a>
<a className="btn-floating" href="#multi-item-example" data-slide="next"><i
className="fas fa-chevron-right"></i></a>
</div>

<ol className="carousel-indicators">
<li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
<li data-target="#multi-item-example" data-slide-to="1"></li>

</ol>

<div className="carousel-inner" role="listbox">

<div className="carousel-item active">

<div className="col-md-3" style={{float: "left"}}>
<div className="card mb-2">
  <img className="card-img-top"
    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt=""/>
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">ome quick example text to build on the card title and make up the bulk of the
      card's content </p>

  </div>
</div>
</div>
<div className="col-md-3" style={{float:"left"}}>
<div className="card mb-2">
  <img className="card-img-top"
    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card cap"/>
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
      card's content.</p>
      
  </div>
</div>
</div>

<div className="col-md-3" style={{float:"left"}}>
<div className="card mb-2">
  <img className="card-img-top"
    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card cap"/>
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
      card's content.</p>
     
  </div>
</div>
</div>

<div className="col-md-3" style={{float:"left"}}>
<div className="card mb-2">
  <img className="card-img-top"
    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card cap"/>
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
      card's content.</p>
      
  </div>
</div>
</div>

</div>

<div className="carousel-item">

<div className="col-md-3" style={{float:"left"}}>
<div className="card mb-2">
  <img className="card-img-top"
    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card cap"/>
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
      card's content.</p>
    
  </div>
</div>
</div>

<div className="col-md-3" style={{float:"left"}}>
<div className="card mb-2">
  <img className="card-img-top"
    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" alt="Card cap"/>
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
      card's content.</p>
      
  </div>
</div>
</div>

<div className="col-md-3" style={{float:"left"}}>
<div className="card mb-2">
  <img className="card-img-top"
    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg" alt="Card cap"/>
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
      card's content.</p>
     
  </div>
</div>
</div>

<div className="col-md-3" style={{float:"left"}}>
<div className="card mb-2">
  <img className="card-img-top"
    src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" alt="Card cap"/>
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
      card's content.</p>
      
  </div>
</div>
</div>

</div>



</div>

</div>
<br/>
<br/>
<div class="wrap">
  <button class="button subscribe">Subscribe</button>
</div>
</div>
<div className="top-of-third-division">

</div>
<div className= "third-division">
        <div className="news">
        <img className="newsImg" src={News} alt=""/>
        <h3>News</h3>
        <p> Get all the lastest news first right in the palm of your hands as soon as it breaks. If it's out there, it's right here. Specially suited. Just for you our tatafo!</p>
        </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg" src={Gossip} alt=""/>
            <h3> Gossip</h3>
            <p>We got all the juiciest gossip right here. We don't care if the gist is true or false. It's none of our business abeg. Once it trends, it's here fam.</p>
        </div>
        <div className="fashion">
              <br/>
            <br/>
            <img className="fashionImg"src={Fashion} alt=""/>
            <div className="fashionText"><h3>Fashion</h3>
            <p>You know we just had to add this section. We're steady showing you how to drip, you obviously need it smh...</p></div>

            

        </div>
<br/>
</div> 
<div className="bottom-of-third-division">

</div>
<div className="fourth-division"> 
        <hr/>
        <br/>
        <h2 className="">Why Us?</h2>
        <br/>
        <br/>
        <div className="companies">
             <div className="company-card">
                <img className="cardImg" src={Cnn} alt=""/>
                <div className="container">
                    <p> "Tatafo blog; best blog world-wide"</p>
                </div>
             </div>
             <div className="company-card">
                <img className="cardImg" src={Nasa} alt=""/>
                <div className="container">
                    <p> "Astronauts confirm Universe's no 1 blog"</p>
                </div>            
             </div>
             <div className="company-card">
                <img className="cardImg" src={Bbc} alt=""/>
                <div className= "container">
                    <p> "We always look up to Uyi's blog"</p>
                </div>
             </div>
        </div>
</div>
<div className="top-of-fifth-division">

</div>
<div className="fifth-division">
    <img className="dark" src={Nyt} alt=""/>
    <img className="dark" src={Wsj} alt=""/>
    <img className="dark" src={Tc} alt=""/>
    <img className="dark" src={Tr} alt=""/>
    <img className="dark" src={Bc} alt=""/>
    <img className="dark" src={Pc} alt=""/>
    <img className="dark" src={Cn} alt=""/>
    <img className="dark" src={Fb} alt=""/>
    <img className="dark" src={Hp} alt=""/>

</div>
<div className="sixth-division">
    <p> Sign up today! </p>
    <div class="wrap">
  <button class="button subscribe">Subscribe</button>
</div>
</div>
<div className="seventh-division">
        <br/>
         <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
        <a className="footer-link" href="https://twitter.com/">Twitter</a>
        <a className="footer-link" href="http://uyi.com">Website</a>
        <p className="last">© 2020 <span class="last-last">Omoruyi Ohuoba.</span> All Rights Reserved.</p>
</div>

</div>

           
       
 
    

);
}

export default Home;
