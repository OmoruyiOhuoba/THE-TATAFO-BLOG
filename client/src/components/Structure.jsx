import React from "react";

function Structure(props){
    return (
       <div>
       <div className="articleItem-2">
    <a href="" className="articleCard">
    <div className="articleThumb" ></div>
      <article className="articleArticle">
        <h1 className="articleH1">{props.title}</h1>
        <p className="articleP">{props.body}</p>
        <span className="articleSpan">{props.author}</span>
      </article>
    </a>
  </div>
       </div>
    );

}

export default Structure;




