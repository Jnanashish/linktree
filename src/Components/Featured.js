import React from "react";
import "../main.css";

function Featured(props) {
  return (
    <div>
      <a className="featured-link" href={props.link}>
        {props.name}
      </a>
    </div>
  );
}

export default Featured;
