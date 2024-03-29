import React,{useState, useEffect} from 'react'
import firebase from "firebase/app";

// component
import "../Style/App.css"
import "../Style/Udemy.css"
import "../Style/Link.css"

const Links = (props) => {
    // store all the list of links received from database
    const [links, setLinks] = useState({})

    useEffect(()=>{
        getdetails();
    },[])  // blank to run only on first time

    const getdetails = () =>{
        const linkref = firebase.database().ref('links');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null)
                setLinks({
                    ...snapshot.val()
                })
        })
    }

    return ( 
            <section className="resource container">
            <h3>Important Resources</h3>
            {Object.keys(links).map(id => {
                return(
                    <div className="link left">
                        <i class="fas fa-hand-point-right"></i>
                        <a href={links[id].link}>{links[id].name}</a>
                    </div>
                )
            })}
            </section>


    )   
}

export default Links;


