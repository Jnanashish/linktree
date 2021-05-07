import {useState, useEffect, useContext} from "react";

// material ui component
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

// firebase
import db from "../utils/firebase_config"
import firebase from "firebase/app";

// utils
import {v4} from "uuid";
import {UserContext} from "../context/UserContext"
import {Redirect} from "react-router-dom"

// component
import AdminLink from "../Components/AdminLinks"


const Admin = () =>{
    const context = useContext(UserContext);

    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    // store all the list of links received from database
    const [links, setLinks] = useState({})

    useEffect(()=>{
        getdetails();
    },[])  // blank to run only on first time

    // function to receive the details from firebase
    const getdetails = () =>{
        const linkref = firebase.database().ref('links');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null)
                setLinks({
                    ...snapshot.val()
                })
        })
    }

    // function to add the details
    const addDetails = (e) =>{
        e.preventDefault();
        try {
            db.database().ref('links/' + v4()).set({
                name, link
            })
        } catch (error) {
            console.log(error);
        }
        setName('');
        setLink('');
    }

    // check if user is admin or loged in 
    if (!context.user?.email) {
        return <Redirect to="/" />;
    }

    return(
        <div>
        <form>
            <TextField 
                id="standard-basic" 
                label="Standard" 
                value = {name}
                style={{ width: "90vw", maxWidth: "500px" }}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField 
                id="standard-basic" 
                label="Standard" 
                value = {link}
                style={{ width: "90vw", maxWidth: "500px" }}
                onChange={(e) => setLink(e.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                onClick={addDetails}
            >Add Link</Button>
        </form>
        <div>
            <h2>User </h2>
            {Object.keys(links).map(id => {
                const temp = links[id]
                return(
                    <div>
                        <AdminLink key={id} link = {temp} id = {id} />
                    </div>
                )
            })}
        </div>
       </div> 
    )
}

export default Admin;