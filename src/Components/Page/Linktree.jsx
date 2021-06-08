import React, {useState, useEffect} from 'react'
import firebase from "firebase/app";

// component
import "../../Style/App.css"
import "../../Style/Link.css"

import Profile from "../Profile"


const Linktree =() =>{
    // store all the list of links received from database
    const [links, setLinks] = useState({})

    useEffect(()=>{
        getdetails();
    },[])  // blank to run only on first time

    const getdetails = () =>{
        const linkref = firebase.database().ref('linktree');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null)
                setLinks({
                    ...snapshot.val()
                })
        })
    }


    return (
        <div>
            <Profile/>
            <section className="resource linktree">
            {/* <h3>Find your links here</h3> */}
            {Object.keys(links).map(id => {
                return(
                    <div className="link left">
                        <i class="fas fa-hand-point-right"></i>
                        <a href={links[id].link}>{links[id].name}</a>
                    </div>
                )
            })}
            </section>
        </div>
    )
}

export default Linktree;
