import React from 'react'

// component
import "../Style/App.css"
import "../Style/Link.css"

const Links = (props) => {
    return ( 
            <div className="link grid">
                <i class="{}"></i>
                <a href="{props.link.link}">{props.link.name}</a>
            </div>
    )
}

export default Links;

