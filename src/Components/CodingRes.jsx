// For all the web development related Material
import react,{useState, useEffect} from "react";
import firebase from "firebase/app";

// css
import "../../Style/Resource.css"

const CodingRes = (props) =>{
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
            <h1>{props.name}</h1> 
            <h2>Best Online Courses 🔥</h2>
            <hr/>
            {Object.keys(links).map(id => {
                if(links[id].domain==="{props.domain}"){return(
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
    )
}

export default CodingRes;