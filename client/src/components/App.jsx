import React from "react";
import "../../public/scss/style.scss";
import About from "./About";
import Home from "./Home";
import Articles from "./Articles";
import AddArticle from "./AddArticle";
import Contact from "./Contact";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App(){

    return(
        <div>
        <Router>
            <div className= "topest">
                <ul>
                   <li><Link to="/about" className="nav"> About</Link></li>
                    <li><Link to="/home" className="nav"> Home </Link> </li>
                    <li><Link to="/articles" className="nav">Articles</Link></li>
                    <li><Link to="/addarticle" className="nav"> Add-Article </Link></li>
                    <li><Link to="/contact" className="nav"> Contact</Link></li>
                </ul>
            </div>
    <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/home" component={Home} />
        <Route path = "/about" component={About} />
        <Route path = "/articles" component={Articles} />
        <Route path = "/addarticle" component={AddArticle} />
        <Route path = "/contact" component={Contact} />
    </Switch>
    </Router>
        </div>
    )
  
 
}

export default App;