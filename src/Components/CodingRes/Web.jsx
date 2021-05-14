// For all the web development related Material
import react,{useState, useEffect} from "react";
import firebase from "firebase/app";

// 
import Footer from "../Footer.jsx";
import Email1 from '../Email1';

// css
import "../../Style/Resource.css"

const Web = () =>{
    const [links, setLinks] = useState({});
    const [website, setWebsite] = useState({});  // to store the website links
    useEffect(()=>{ getdetails(); getwebsite();},[])   //load the links at first

    const getdetails = () =>{
        const linkref = firebase.database().ref('resource');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null)
                setLinks({
                    ...snapshot.val()
                })
        })
    }
    const getwebsite = () =>{
        const linkref = firebase.database().ref('website');
        linkref.on("value", snapshot =>{
            if(snapshot.val() != null)
                setWebsite({
                    ...snapshot.val()
                })
        })
    }
    return(
        <div>
        <div className="res-header">
            <h1>Web development</h1> 
            <div className="res-home">
                <a href="/"><span>Home</span><i class="fas fa-home"></i></a>
            </div>  
        </div> 
        <div className="view"> 
            <h2>Best Online Courses 🔥</h2>
            <hr/>
            {Object.keys(links).map(id => {
                if(links[id].domain==="web"){return(
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
        {/* Important website  */}
        <div className="view">
            <h2>Must Visited website </h2>
            <hr />
            {Object.keys(website).map(id => {
                if(website[id].domain==="web"){return(
                    <a href={"https://"+ website[id].link}>
                        <div className="card web-card">
                            <p><span className="web-link">{website[id].link} </span>: {website[id].name}</p>
                        </div>  
                    </a>
                )}
            })}

        </div>
        <Email1/>
        <Footer/>
        </div>
    )
}

export default Web;