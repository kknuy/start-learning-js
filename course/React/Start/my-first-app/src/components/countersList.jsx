import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 2, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters((counter) => counter.filter((c) => c.id !== id));
  };

  const handleIncrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        id === counter.id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };



  const handleDecrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        id === counter.id ? { ...counter, value: counter.value - 1 } : counter
      )
    );
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIcrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
      <button className="btn btn-primary m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
