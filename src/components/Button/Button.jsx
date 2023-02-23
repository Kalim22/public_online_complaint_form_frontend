import React from "react";

function Button(props) {
  return (
    <>
      <button
        type={props.type}
        onClick={props.onclick || null}
        className={`${props.className} brk-btn`}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
