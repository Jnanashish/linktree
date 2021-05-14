import react,{useState, useEffect} from "react";

// css
import "../Style/Footer.css"

const Footer = () =>{
    const [count, setCount] = useState('')
    useEffect(()=>{ pageview();},[]) 

    const pageview = () =>{
        // page view 1 for production
        fetch('https://api.countapi.xyz/update/thecodergeek.co/pageview/?amount=1')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setCount(data.value)
        })
    }

    return(
        <div className="footer">
            <h3>Total Page view 👁️ {count}</h3>
            <h3>Made with ❤️ in India by @jsh</h3>
        </div>
    )
}

export default Footer;