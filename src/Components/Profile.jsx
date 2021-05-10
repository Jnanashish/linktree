import React from 'react'

// image
import logo from "../Image/logo.png"

// Profile css file
import "../Style/App.css"
import "../Style/Profile.css"

const Profile = () => {
    return (
    <div>
    <header className="header grid">
        <img className="logo" src={logo} alt="logo"/>
        <div className="header-text">
            <h1>@thecodergeek</h1>
            <p>Get coding resources, ebooks, competitive programmibg group. Join us in other community platform</p>
        </div>
    </header>
    
    {/* Navbar only for laptop view  */}
    <section class="nav-bar">
        <ul class="flex">
            <li><a href="/">Home</a></li>
            <li><a href="/web">Web development</a></li>
            <li><a href="/cp">Competitive Programming</a></li>
            <li><a href="/ml">Machine Learning</a></li>
        </ul>
    </section>

    </div>
    )
}

export default Profile;