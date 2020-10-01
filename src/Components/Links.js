import React from "react";

function Links(props) {
  return (
    <div>
      <a className="links" href={props.title}>
        {props.name}
      </a>
    </div>
  );
}

export default Links;
