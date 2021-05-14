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
import AdminLink from "../Components/AdminLink"

// css
import "../Style/Admin.css"

const Admin = () =>{
    const context = useContext(UserContext);
    // state to store all the links data
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const [icon, setIcon] = useState(''); // icon for website 
    // store all the list of links received from database
    const [links, setLinks] = useState({})
    const [featured, setFeatured] = useState({})   // featured link
    const [resource, setResource] = useState({})   // Resource link
    const [website, setWebsite] = useState({})   // Resource link

    // resource
    const [instructor, setInstructor] = useState('');
    const [provider, setProvider] = useState('');
    const [price, setPrice] = useState('');
    const [domain, setDomain] = useState('');


    useEffect(()=>{
        getlinks(); getfeatured(); getresource(); getwebsite();
    },[])  // blank to run only on first time

    // function to receive the details from firebase
    const getlinks = () =>{
        const linkref = firebase.database().ref('links');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null) setLinks({...snapshot.val()})
        })
    }
    // receive all the featured link data
    const getfeatured = () =>{
        const linkref = firebase.database().ref('featured');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null) setFeatured({...snapshot.val()})
        })
    }
    // get the all the course links
    const getresource = () =>{
        const linkref = firebase.database().ref('resource');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null) setResource({...snapshot.val()})
        })
    }
    // get all the website for resource section
    const getwebsite = () =>{
        const linkref = firebase.database().ref('website');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null) setWebsite({...snapshot.val()})
        })
    }
    // function to add the details
    const addDetails = (e) =>{
        e.preventDefault();
        try { 
            flag === "link" && db.database().ref('links/' + v4()).set({name, link, icon})   //link 
            flag === "featured" && db.database().ref('featured/' + v4()).set({name, link})  // featured link  
            flag === "udemy" && db.database().ref('udemy/' + v4()).set({name, link,icon,domain})  //udemy link    
            flag === "resource" && db.database().ref('resource/' + v4()).set({name, link,domain, instructor, price,provider})  //udemy link    
            flag === "website" && db.database().ref('website/' + v4()).set({name, link, domain})  //imp websites   
        } catch (error) { console.log(error);}
        setName('');
        setLink('');
    }
    // set the flag acc to value of radio button
    const [flag, setFlag] = useState('');
    const onChangeValue = (event) => {
        setFlag(event.target.value);
    }

    // check if user is admin or loged in 
    if (!context.user?.email) {
        return <Redirect to="/" />;
    }

    return(
        <div className="box">
        <h2>Admin Panel</h2>
        <form className="con">
            <TextField className="inp" id="standard-basic" label="Details" 
                value = {name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField className="inp" id="standard-basic" label="Link" 
                value = {link}
                onChange={(e) => setLink(e.target.value)}
            />
            {/* icon input field only for link and udemy  */}
            {(flag === "link" || flag ==="udemy") 
                && <TextField className="inp" id="standard-basic" label="Icon name" 
                value = {icon}
                onChange={(e) => setIcon(e.target.value)}
            />}
            {(flag === "resource") 
                && <TextField className="inp" id="standard-basic" label="Instructor" 
                value = {instructor}
                onChange={(e) => setInstructor(e.target.value)}
                />}
            {(flag === "resource" || flag === "website") 
                && <TextField className="inp" id="standard-basic" label="Domain : Type web, ml, cp" 
                value = {domain}
                onChange={(e) => setDomain(e.target.value)}
            />}
            {(flag === "resource") 
                && <TextField className="inp" id="standard-basic" label="Price : Either Free or Paid" 
                value = {price}
                onChange={(e) => setPrice(e.target.value)}
            />}
            {(flag === "resource") 
                && <TextField className="inp" id="standard-basic" label="Provider : Udemy etc" 
                value = {provider}
                onChange={(e) => setProvider(e.target.value)}
            />}
            {/* Radio button to check the type of link  */}
            <FormControl className="radioGroup" component="fieldset">
              <FormLabel component="legend"><h3>Select the type of Link</h3></FormLabel>
              <RadioGroup onChange={onChangeValue} className="radio" aria-label="gender" name="gender1">
                <FormControlLabel className="radioButton"  value="link" control={<Radio />} label="Link" />
                <FormControlLabel className="radioButton"  value="featured" control={<Radio />} label="Featured" />
                <FormControlLabel className="radioButton"  value="resource" control={<Radio />} label="Resources" />
                <FormControlLabel className="radioButton"  value="website" control={<Radio />} label="Website" />
                {/* <FormControlLabel className="radioButton"  value="udemy" control={<Radio />} label="Udemy" /> */}
              </RadioGroup>
            </FormControl>
    
            <Button
                type="submit"
                variant="contained"
                onClick={addDetails}
            >Add Link</Button>
        </form>

        {/* print the link  */}
        <div className="adminLink">
            <h2>Links</h2>
            {Object.keys(links).map(id => {
                const temp = links[id]
                return(
                    <div>
                        <AdminLink key={id} type={'links'} link = {temp} id = {id}/>
                    </div>
                )
            })}
            <h2>Featured Links</h2>
            {Object.keys(featured).map(id => {
                const temp = featured[id]
                return(
                    <div>
                        <AdminLink key={id} type={'featured'} link = {temp} id = {id} />
                    </div>
                )
            })}
            <h2>Courses on resource Section</h2>
            {Object.keys(resource).map(id => {
                const temp = resource[id]
                return(
                    <div>
                        <AdminLink key={id} type={'resource'} link = {temp} id = {id} />
                    </div>
                )
            })}
            <h2>Important websites</h2>
            {Object.keys(website).map(id => {
                const temp = website[id]
                return(
                    <div>
                        <AdminLink key={id} type={'website'} link = {temp} id = {id} />
                    </div>
                )
            })}
        </div>
       </div> 
    )
}

export default Admin;