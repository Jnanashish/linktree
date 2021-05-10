import React from 'react'

// component
import "../Style/App.css"
import "../Style/Link.css"

const Resources = () =>{
    return(
        <section className="resource hide container">
            <div className="link grid">
                 <i class="fas fa-laptop-code"></i>
                 <a href="/web">Web development</a>
            </div>
            <div className="link grid">
                 <i class="fas fa-sitemap"></i>
                 <a href="/cp">Competitve Programming</a>
            </div>
            <div className="link grid">
                 <i class="fas fa-robot"></i>
                 <a href="/ml">Machine Learning</a>
            </div>
        </section>
    )
}

export default Resources;
