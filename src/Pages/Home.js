import React from 'react'
import Links from "../Components/Links"

// component
import Profile from "../Components/Profile"
import Algoexpert from '../Components/Algoexpert';
import Featured from "../Components/Featured";
import Resources from '../Components/Resources';

const Home= () => {
    return (
        <div>
            <Profile/>
            <Featured/>
            <Links/>
            <Resources/>
            <Algoexpert/>
        </div>
    )
}

export default Home;