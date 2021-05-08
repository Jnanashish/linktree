import {useState, useEffect, useContext} from "react";

// material ui component
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// firebase
import db from "../utils/firebase_config"
import firebase from "firebase/app";

// utils
import {v4} from "uuid";
import {UserContext} from "../context/UserContext"
import {Redirect} from "react-router-dom"

// component
import AdminLink from "../Components/AdminLinks"

// css
import "../Style/Admin.css"

const Admin = () =>{
    const context = useContext(UserContext);
    // state to store all the links data
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    
    const [icon, setIcon] = useState('Dara');
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
            db.database().ref('featured/' + v4()).set({name, link, icon})   
            // flag === "addDetails" && db.database().ref('links/' + v4()).set({name, link})
            
        } catch (error) { console.log(error);}
        setName('');
        setLink('');
    }
    const [flag, setFlag] = useState('');
    const onChangeValue = (event) => {
        console.log(event.target.value);
        setFlag(event.target.value);
        console.log(name);
        console.log(link);
    }
    const handleSubmit = () =>{
        console.log("called");
        if(flag === 'addDetails') {console.log("erstdytufkyigguikfuydjrt");};
    }
    // check if user is admin or loged in 
    // if (!context.user?.email) {
    //     return <Redirect to="/" />;
    // }

    return(
        <div className="box">
        <h2>Admin Panel</h2>
        <form className="con">
            <TextField className="inp"
                id="standard-basic" 
                label="Details"
                value = {name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField className="inp"
                id="standard-basic" 
                label="Link" 
                value = {link}
                onChange={(e) => setLink(e.target.value)}
            />
            {/* Radio button to check the type of link  */}
            <FormControl className="radioGroup" component="fieldset">
              <FormLabel component="legend"><h3>Select the type of Link</h3></FormLabel>
              <RadioGroup onChange={onChangeValue} className="radio" aria-label="gender" name="gender1">
                <FormControlLabel className="radioButton"  value="addDetails" control={<Radio />} label="Link" />
                <FormControlLabel className="radioButton"  value="addDefwtails" control={<Radio />} label="Featured" />
                <FormControlLabel className="radioButton"  value="addDefwwftails" control={<Radio />} label="Udemy" />
              </RadioGroup>
            </FormControl>

            
            <Button
                type="submit"
                variant="contained"
                onClick={addDetails}
            >Add Link</Button>
        </form>
        <div className="adminLink">
            <h2>Links</h2>
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