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
        <div>

        <div className="articleBody">

<header className= "articleHeader">
    <br/>
    <br/>
    <br/>
    <br/>
 <h1 className="articleTitle">Articles</h1>
     </header>

  <div className="gridContainer ">
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
 <div className="seventh-division articleFooter">
 <a className="footer-link" href="https://github.com/OmoruyiOhuoba">GitHub</a>
        <a className="footer-link" href="https://omoruyiohuoba.com/">Website</a>
        <a className="footer-link" href="https://twitter.com/OmoruyiOhuoba">Twitter</a>
        <p>© {new Date().getFullYear()}  <span class="last-last">Omoruyi Ohuoba.</span> All Rights Reserved.</p>
</div>

        </div>
       
        

      
    )
}

export default Articles;
