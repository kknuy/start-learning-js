import React, { useState } from "react";

const Counter = (props) => {
  const {value} = props;

  const formatValue = () => {
    return value === 0 ? <span>empty</span> : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2";
    classes += value === 0 ? " bg-warning" : " bg-primary";
    return classes;
  };


  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className="btn btn-primary m-2" onClick={() => props.onIcrement(props.id)}>
        +
      </button>
      <button className="btn btn-primary m-2" onClick={() => props.onDecrement(props.id)}>
        -
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
     
    </div>
  );
};

export default Counter;
