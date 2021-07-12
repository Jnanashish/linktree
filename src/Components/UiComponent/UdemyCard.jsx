import web1 from "../../Image/web1.jpg"
import web2 from "../../Image/web2.jpg"
import web3 from "../../Image/web3.jpg"
import web4 from "../../Image/web4.jpg"


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"

// import "./styles.css";

import "../../Style/UdemyCard.css"

// import Swiper core and required modules
import SwiperCore, {
  Scrollbar
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Scrollbar]);


const UdemyCard = () => { 
  return (
    <div className="box">
    <h3>Best Udemy Courses 🔥</h3>
    <Swiper 
        scrollbar={{"hide": false}}
        spaceBetween={5}
        Autoplay={true}
        slidesPerView = {"auto"}
        className="mySwiper">
        <SwiperSlide style={{width:"300px"}}>
        <div className = "udemyCard">
            <img src={web1} alt="" />
            <h2>The Complete 2021 Web development Bootcamp</h2>
            <p>Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!</p>
            <a href="https://click.linksynergy.com/link?id=*qWC*w9iiSw&offerid=507388.1565838&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fthe-complete-web-development-bootcamp%2F">
                <button>Know More</button>
            </a>
        </div>

        </SwiperSlide>
        <SwiperSlide style={{width:"300px"}}>
        <div className = "udemyCard">
            <img src={web2} alt="" />
            <h2>Data Structures & Algorithms, Level-up Course(2021)</h2>
            <p>The only course you need to master problem solving using Data Structures & Algorithms in C++</p>
            <a href="https://click.linksynergy.com/link?id=*qWC*w9iiSw&offerid=507388.3642112&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcpp-data-structures-algorithms-levelup-prateek-narang%2F">
                <button>Know More</button>
            </a>
        </div>        
        </SwiperSlide>
        <SwiperSlide style={{width:"300px"}}>
        <div className = "udemyCard">
            <img src={web3} alt="" />
            <h2>React Front To Back</h2>
            <p>Learn Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects. Brad Traversy</p>
            <a href="https://click.linksynergy.com/link?id=*qWC*w9iiSw&offerid=507388.2395488&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fmodern-react-front-to-back%2F">
                <button>Know More</button>
            </a>
        </div>

        </SwiperSlide>
        <SwiperSlide style={{width:"300px"}}>
        <div className = "udemyCard">
            <img src={web4} alt="" />
            <h2>Machine Learning A-Z™: Hands-On Python & R In Data Science</h2>
            <p>Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!, 1,116,974 students, Jose Portilla</p>
            <a href="https://click.linksynergy.com/link?id=*qWC*w9iiSw&offerid=507388.567828&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fcomplete-python-bootcamp%2F">
                <button>Know More</button>
            </a>
        </div>

        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default UdemyCard;