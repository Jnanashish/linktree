// For all the web development related Material
import react,{useState, useEffect} from "react";
import firebase from "firebase/app";

// css
import "../../Style/Resource.css"

const Web = () =>{
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
        <div className="view">  
            <h2>Competitve Programming</h2> 
            {Object.keys(links).map(id => {
                if(links[id].domain==="CP"){return(
                    <div className="card">
                        <a href={links[id].link}>
                        <span>{links[id].name} </span>
                        <p>{links[id].provider} , 👩‍🏫 {links[id].instructor} 
                        <span className="free">{links[id].price}</span>
                        </p></a>
                    </div>
                )}
            })}             
        </div>
    )
}

export default Web;