import React,{useState} from "react";

// react-router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// context to handle if admin is login or not
import { UserContext } from "./context/UserContext"

//firebase
import "firebase/auth"

// components
import Admin from "./Pages/Admin"
import Signin from "./Pages/Signin"
import Home from "./Pages/Home"
import Web from "./Components/CodingRes/Web";
import ML from "./Components/CodingRes/ML";
import CP from "./Components/CodingRes/CP";
import Counter from "./Components/Counter";
import Linktree from "./Components/Page/Linktree"



// Main style
import "./Style/App.css"

const App = () =>{
  // state for user
  const [user, setUser] = useState(null)

  return (
    <Router>
      <UserContext.Provider value = {{user, setUser}}>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/admin" component={Admin}/>
          <Route exact path = "/signin" component={Signin}/>
          <Route exact path = "/web" component={Web}/>
          <Route exact path = "/cp" component={CP}/>
          <Route exact path = "/ml" component={ML}/>
          <Route exact path = "/count" component={Counter}/>
          <Route exact path = "/links" component={Linktree}/>
          <Route exact path = "*" component={Home}/>
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
