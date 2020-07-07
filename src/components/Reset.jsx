import React from "react";

const Reset = (props) => {
  return (
    <button type="button" className="btn btn-primary m-5" onClick={props.Reset}>
      Reset
    </button>
  );
};

export default Reset;
