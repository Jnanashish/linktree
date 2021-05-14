import react,{useState, useEffect} from "react";

const Counter = () =>{
    const [count, setCount] = useState('0')
    useEffect(()=>{ pageview();},[]) 

    const pageview = () =>{
        fetch('https://api.countapi.xyz/update/thecodergek.co/pageview1/?amount=1')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            // setCount(data.value)
        })
    }
    return(
        <div>
            <h1>Page Counter</h1>
            <h2>{count}</h2>
        </div>
    )
}

export default Counter;

// create a namespace and key
// https://api.countapi.xyz/create?namespace=thecodergeek.co&key=pageview&value=0

// get the value
// https://api.countapi.xyz/get/thecodergeek.co/pageview

// increament by 
// https://api.countapi.xyz/update/thecodergeek.co/pageview1/?amount=1
