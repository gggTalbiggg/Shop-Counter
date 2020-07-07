import React from "react";

const Counter = (props) => {
  return (
    <div className="container m-2 w-50">
      <div className="row">
        <div className="col-sm-2">
          <span className={`${props.displayStyle}`}>{props.badgeDisplay}</span>
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.Increment(props.id)}
          >
            +
          </button>
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.decrement(props.id)}
            disabled={!props.Value}
          >
            -
          </button>
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.delete(props.id)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
