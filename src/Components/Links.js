import React from "react";

function Links(props) {
  return (
    <div>
      <a className="links" href={props.link}>
        {props.name}
      </a>
    </div>
  );
}

export default Links;
