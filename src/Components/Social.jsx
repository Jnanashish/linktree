import React from 'react';

import iglogo from "../Image/instagram.png"

// component
import "../Style/App.css"
import "../Style/Udemy.css"
import "../Style/Link.css"

function Social() {
    return (
        <div className="link left">
            <img style={{width:"18px", marginTop:"5px"}} src={iglogo} alt="#" />
            <a style={{textAlign:"left"}} href="https://www.instagram.com/thecodergeek/"><h4>Follow us on Instagram</h4></a>
        </div>
    )
}


export default Social;