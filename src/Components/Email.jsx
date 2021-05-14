import React,{useState} from 'react'
import validator from 'validator'

// firebase
import db from "../utils/firebase_config"
import firebase from "firebase/app";
import {v4} from "uuid";


//css
import "../Style/Email1.css"

const Email = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // flag to hide the email 
    const [flag, setFlag] = useState(true);

    const [emailError, setEmailError] = useState('')    
    const adddetail = (e) =>{
        e.preventDefault();
        console.log(name);
        if(!name) alert("Please Enter your name")
        if(!email) alert("Please Enter your Email")

        if (!validator.isEmail(email)) {
            setEmailError('* Enter valid Email!')
        }
        else{
        try { 
            db.database().ref('email/' + v4()).set({name, email})
        } catch (error) { console.log(error);}   
        
        setFlag(false);
        }
    }

    return(
        <div>
        {(flag === true) && 
            <form name="form1" className="email container">
            <p className="lp">*Subscribe to our newsletter to get updates of Free resources 💡</p>
            <p className="mobile">*Subscribe to our newsletter 😊</p>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                <br />
            <p style={{
                color: 'red',
                textAlign: 'left',
                fontSize:'10px',
                marginLeft:'50px'
            }}>{emailError}</p>
            <input 
                name="email" 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
            <button className="glow-on-hover" type="submit" onClick={adddetail}>Submit</button>
        </form>}
        {(flag === false) && <h3 className="thank">Thank You ❤️</h3>} 
        </div>
    )
}

export default Email;
