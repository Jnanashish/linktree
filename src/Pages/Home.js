import React from 'react'
import Links from "../Components/Links"

// component
import Profile from "../Components/Profile"
import Algoexpert from '../Components/Algoexpert';
import Featured from "../Components/Featured";
import Amazon from '../Components/Amazon';
import Carousel from '../Components/Carousel';

const Home= () => {
    return (
        <div>
            <Profile/>
            <Featured/>
            <Links/>
            {/* <Amazon/> */}
            {/* <Carousel/> */}
            <Algoexpert/>
        </div>
    )
}

export default Home;