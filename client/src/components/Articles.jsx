import React, {useState, useEffect} from  "react";
import axios from "axios";
import Structure from "./Structure";

function Articles(){
    const [totalpost, setTotalPosts] = useState([""]);

    useEffect(() => {
        axios.get("http://localhost:4000/articles")
        .then((res) => {
            setTotalPosts(res.data);
        }).catch(error =>{
            console.log(error);
        })
    });

    return (
       <div className="articleBody">

       <header className= "articleHeader">
           <br/>
           <br/>
           <br/>
  <h1 className="articleH1">Articles</h1>
  <br/>
</header>
<div className="articleBand">
  <div className="articleItem-1">
    <a href="" className="articleCard">
      <div className="articleThumb"></div>
      <article className= "articleArticle">
        <h1 className="articleH1">International Artist Feature: Malaysia</h1>
        <p className="articleP">Malaysia's art epicentre is looking like the world's aesthetic utopia as foreseen by the great DaVinci</p>
        <span className="articleSpan">Mary Winkler</span>
      </article>
    </a>
  </div>

  <div className="articleItem-2">
  {totalpost.map((data, index) => {
                    return(
                        <Structure 
                        title = {data.title}
                        body ={data.body}
                        author = {data.author}
                        img ={data.img}
                        key = {index}
                        id= {index}
                        />);
                })}
  </div>

</div>

       </div>
      
    )
}

export default Articles;
