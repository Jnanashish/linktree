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
        const linkref = firebase.database().ref('udemy');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null)
                setLinks({
                    ...snapshot.val()
                })
        })
    }

    return ( 
            <section className="resource container">
            <h3>Best Udemy Courses</h3>
            {Object.keys(links).map(id => {
                return(
                    <div className="link grid">
                        <i class="{links[id].icon}"></i>
                        <a href="{links[id].link}">{links[id].name}</a>
                    </div>
                )
            })}
            </section>
    )   
}

export default Links;
