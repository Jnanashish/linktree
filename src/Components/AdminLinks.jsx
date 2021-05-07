import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';

import firebase from "firebase";


const AdminLink = (props) => {
  const [newlink, setNewlink] = useState('')
  const [newname, setNewname] = useState('')
  const deleteLink = () =>{
    const linkRef = firebase.database().ref('links').child(props.id)
    linkRef.remove()
  }
  const updateLink = ()=>{

    const linkRef = firebase.database().ref('links').child(props.id)
    linkRef.update({
      link: newlink,
      name: newname,
    })
  }
  return (
    <div>
    <h3>{props.link.name}</h3>
    <button onClick={deleteLink}>Delete</button>
    <button onClick={updateLink}>Update</button>
        <TextField 
        id="standard-basic" 
        label="Standard" 
        value = {newlink}
        style={{ width: "90vw", maxWidth: "500px" }}
        onChange={(e) => setNewlink(e.target.value)}
    />
      <TextField 
        id="standard-basic" 
        label="Standard" 
        value = {newname}
        style={{ width: "90vw", maxWidth: "500px" }}
        onChange={(e) => setNewname(e.target.value)}
    />
    </div>
  );
}

export default AdminLink;