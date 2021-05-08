import React from 'react'
import Links from "../Components/Links"

// component
import Profile from "../Components/Profile"
import Algoexpert from '../Components/Algoexpert';
import Udemy from "../Components/Udemy";
import Featured from "../Components/Featured";

const Home= () => {
    return (
        <div>
            <Profile/>
            <Featured/>
            <Links/>
            <Udemy/>
            <Algoexpert/>
        </div>
    )
}

export default Home;