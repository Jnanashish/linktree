import react,{useState, useEffect} from "react";

const Counter = () =>{

    return(
        <div>
            <h1>Page Counter</h1>
            {/* <h2>{count}</h2> */}
            <div>
                <script type="text/javascript" src="http://services.webestools.com/cpt_visitors/69970-17-1.js"></script>
            </div>
            {/* <a href="http://www.webestools.com/"  title="Tools services webmasters counters generators scripts tutorials free"> */}
            {/* <img src="http://www.webestools.com/images/ban03.gif" alt="Tools services webmasters counters generators scripts tutorials free" /></a> */}
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
