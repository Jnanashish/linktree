import React,{useState, useEffect} from 'react'
import firebase from "firebase/app";
import Links from "../Components/Links"

// component
import Profile from "../Components/Profile"

const Home= () => {

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
        <div>
            <Profile/>
            <section className="resource container">
            <h3>Coding Resources</h3>
            {Object.keys(links).map(id => {
                return(
                    <Links key={id} link = {links[id]}/>     
                )
            })}
            </section>
        </div>
    )
}

export default Home;