import React, { useState , useContext } from "react";

// firebase stuff
import firebase from "firebase/app"

// router
import {Redirect} from "react-router-dom"

// context
import {UserContext} from "../context/UserContext"


// jhandique1999@gmail.com
// J2handique@

const Signin = () =>{
    const context = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSignin = () =>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then( res=>{
            console.log(res);
            context.setUser({email:res.user.email})
        }
        )
        .catch(err => {
            alert(err.message);
        })
    }

    if (context.user?.email) {
      return <Redirect to="/admin" />;
    }

    return(
        <div>  
            <h1>Sign in</h1>
            <input 
                type = {email}
                value = {email}
                style={{ width: "90vw", maxWidth: "500px" }}
                onChange={(e) => setEmail(e.target.value)}                
            />
            <input 
                type = {password}
                value = {password}
                style={{ width: "90vw", maxWidth: "500px" }}
                onChange={(e) => setPassword(e.target.value)}                
            />
            <button onClick={handleSignin}>Sign in </button>
        </div>
    )
}

export default Signin;