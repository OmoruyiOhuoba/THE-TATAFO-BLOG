import React from "react";

function Structure(props){
    return (
       <div className="gridContainer">
          <div className="item">
           <h5 className="gridH5">{props.title}</h5>
            <p className="articleP">{props.body}</p>
            <p><span className="articleSpan">{props.author}</span></p>
          </div>
      
     </div>
    );

}

export default Structure;




