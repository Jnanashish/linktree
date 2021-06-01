import React,{useEffect} from "react";



const Instagram = () =>{

    const bud = require('basic-instagram-user-details');
    
    const user = 'thecodergeek';
    
    bud(user, 'followers').then(followers => {
      console.log(followers);
      // => { data: 'Rishi Giri' }
    });

    // const getfollowers = () =>{
    //     fetch('https://www.instagram.com/thecodergeek/?__a=1', { mode: 'no-cors'})
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data);
    //     })
    // }

    // useEffect(() => {
    //     getfollowers();
    // }, [])

    return(
        <div>
            <h1>join our</h1>
        </div>
    )
}

export default Instagram;