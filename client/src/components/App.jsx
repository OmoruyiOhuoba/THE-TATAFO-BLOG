import React from "react";
import "../../public/scss/style.scss";
import About from "./About";
import Home from "./Home";
import Articles from "./Articles";
import AddArticle from "./AddArticle";
import Contact from "./Contact";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from "./Layout/NavBar";

function App(){

    return(
        <div>
        <Router>
            <NavBar/>
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