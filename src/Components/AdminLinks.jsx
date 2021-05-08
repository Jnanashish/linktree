import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';

import firebase from "firebase";

// css file
import "../Style/AdminLink.css"

const AdminLink = (props) => {
  // state to hold the updated link
  const [newlink, setNewlink] = useState('')
  const [newname, setNewname] = useState('')

  // function to delete the link
  const deleteLink = () =>{
    const linkRef = firebase.database().ref('links').child(props.id)
    linkRef.remove()
  }

  // function to update link
  const updateLink = ()=>{
    const linkRef = firebase.database().ref('links').child(props.id)
    linkRef.update({
      link: newlink,
      name: newname,
    })
  }
  const[flag, setFlag] = useState(false)
  const viewform = ()=>{
    setFlag(!flag);
  }

  return (
    <div className="grid-container">
      <div className="grid-item">
        <h3>Detail : {props.link.name}</h3>
        <h3>Link : {props.link.link}</h3>
      </div>
      {/* form to update changes */}
      <div className="grid-item">
          <button onClick={deleteLink}>Delete</button>
          <button onClick={viewform}>Update</button>
      </div>
      
      {flag === true && <form className="update-form">
          <TextField 
            id="standard-basic" 
            label="New Detail" 
            value = {newname}
            onChange={(e) => setNewname(e.target.value)}
          />
          <TextField 
            id="standard-basic" 
            label="New link" 
            value = {newlink}
            onChange={(e) => setNewlink(e.target.value)}
          />
          <button className="submit-button" onClick={updateLink}>Submit</button>
      </form>}
      
    </div>
  );
}

export default AdminLink;