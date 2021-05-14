import React,{useContext} from 'react'
import Links from "../Components/Links"

// component
import Profile from "../Components/Profile"
import Algoexpert from '../Components/Algoexpert';
import Featured from "../Components/Featured";
import Resources from '../Components/Resources';
import Footer from '../Components/Footer';
import Email1 from '../Components/Email1';

const Home= () => {
    return (
        <div>
            <Profile/>
            <Featured/>
            <Links/>
            <Resources/>
            <Algoexpert/>
            <Email1/>
            <Footer/>
        </div>
    )
}

export default Home;