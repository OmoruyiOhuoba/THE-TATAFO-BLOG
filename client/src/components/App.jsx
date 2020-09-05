import React from "react";
import "../../public/scss/style.scss";
import Home from "./Home";
import Articles from "./Articles";
import AddArticle from "./AddArticle";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./Layout/NavBar";

function App(){

    return(
        <div>
        <Router>
            <NavBar/>
    <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/home" component={Home} />
        <Route path = "/articles" component={Articles} />
        <Route path = "/addarticle" component={AddArticle} />
    </Switch>
    </Router>
        </div>
    )
  
 
}

export default App;