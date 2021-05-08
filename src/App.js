import React,{useState} from "react";

// react-router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// context
import { UserContext } from "./context/UserContext"

//firebase
import "firebase/auth"

// components
import Admin from "./Pages/Admin"
import Signin from "./Pages/Signin"
import Home from "./Pages/Home"
import Resource from "../src/Components/Resource"


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
          <Route exact path = "/res" component={Resource}/>
          <Route exact path = "*" component={Home}/>
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
