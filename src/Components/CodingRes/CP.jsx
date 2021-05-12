// For all the web development related Material
import react,{useState, useEffect} from "react";
import firebase from "firebase/app";

import Footer from "../Footer.jsx"

// css
import "../../Style/Resource.css"

const CP = () =>{
    const [links, setLinks] = useState({});
    useEffect(()=>{ getdetails();},[])   //load the links at first

    const getdetails = () =>{
        const linkref = firebase.database().ref('resource');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null)
                setLinks({
                    ...snapshot.val()
                })
        })
    }
    return(
        <div>
        <div className="view">  
            <h1>Competitve Programming</h1> 
            <h2>Best Online Course 🔥</h2>
            <hr />
            {Object.keys(links).map(id => {
                if(links[id].domain==="cp"){return(
                        <a href={links[id].link}>
                        <div className="card">
                            <span className="course-name">{links[id].name} </span>
                            <p className="detail">{links[id].provider} , 👩‍🏫 {links[id].instructor} </p>
                            <p className="free">{links[id].price}</p>
                        </div>
                        </a>

                )}
            })} 
                       
        </div>
        <Footer/> 
        </div>
    )
}

export default CP;