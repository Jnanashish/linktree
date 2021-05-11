import React from 'react'

// component
import "../Style/App.css"
import "../Style/Link.css"

const Resources = () =>{
    return(
        <section className="resource hide container">
        <h3>More Resources 👇</h3>
            <div className="link">
                 <i className="fas fa-laptop-code"></i>
                 <a href="/web">Web development</a>
                 <i className="fas fa-chevron-right"></i>
            </div>
            <div className="link">
                 <i className="fas fa-sitemap"></i>
                 <a href="/cp">Competitve Programming</a>
                 <i className="fas fa-chevron-right"></i>
            </div>
            <div className="link">
                 <i className="fas fa-robot"></i>
                 <a href="/ml">Machine Learning</a>
                 <i className="fas fa-chevron-right"></i>
            </div>
        </section>
    )
}

export default Resources;
