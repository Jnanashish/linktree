import React, {useState, useEffect} from 'react'
import firebase from "firebase/app";

// component
import "../../Style/App.css"
import "../../Style/Link.css"

import Profile from "../Profile"
import UdemyCard from '../UiComponent/UdemyCard';


const Linktree =() =>{
    // store all the list of links received from database
    const [links, setLinks] = useState({})

    useEffect(()=>{
        getdetails();
    },[])  // blank to run only on first time

    const getdetails = async () =>{
        const linkref = await firebase.database().ref('linktree');
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
            <hr classname="line"/>
            <section className="container resource">
            <h3>Get all the Important Links 👇</h3>
            {Object.keys(links).map(id => {
                return(
                    <div className="link instagram">
                        <a href={links[id].link}>{links[id].name}</a>
                    </div>
                )
            })}
            <br />
            <div className="link instagram fixed">
                <a href="https://www.algoexpert.io/thecodergeek"><b>Algoexpert :</b> 🚀 The ultimate resource to prepare for Coding Interview</a>
            </div>
            <div style={{backgroundColor: "rgb(85, 150, 246)", color:"#fff"}} className="link instagram">
                <a href="https://thecodergeek.co/web">Web development resources</a>
            </div>
            </section>
            
            <UdemyCard/>
        </div>
    )
}

export default Linktree;
