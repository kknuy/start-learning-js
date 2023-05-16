import React from "react";

const BookMark = ({ status, onToggle, id }) => {
  return (
    <button onClick={() => onToggle(id)}>
      <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
    </button>
  );
};

export default BookMark;
