import React, {useState} from "react";
import axios from "axios";

function AddArticle(){
    const [post, setPost] = useState({
        title: "",
        body: "",
        author:"",
        img: ""
    });
    
    function handleChange(event){
        const { name, value } = event.target;

        setPost((prevValue) => {
            return{
                ...prevValue, [name]: value
            }
        })
        console.log(post);
    }

    function submit(event){
        event.preventDefault();

        axios.post("http://localhost:4000/articles/addarticle", post)
        .then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })

        setPost({
            title: "",
            body: "",
            author:"",
            img:""
        });


    }

    return(
  <div className="addarticle">
            <form action="">
         <div className="col-12 col-lg-6 offset-lg-3">
            <input className="form-control my-3" name="title" placeholder="Title" onChange={handleChange}/>
            <textarea className="form-control my-3" name="body" placeholder="Content" onChange={handleChange} id="" cols="30" rows="10"></textarea>
            <input className="form-control my-3" name="author" placeholder="Author" onChange={handleChange} type="text"/>
            <button className="btn btn-primary float-right" onClick={submit}> Post </button>
         </div>
         </form>
        </div>


    )
}

export default AddArticle;