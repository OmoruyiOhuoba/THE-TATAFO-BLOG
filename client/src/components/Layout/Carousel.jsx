import React from "react";

const Carousel = () => {
    return(
        <div>
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
        </div>
    )

}

export default Carousel;