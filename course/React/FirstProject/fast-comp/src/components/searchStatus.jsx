import React from "react";

const SearchStatus = ({ length }) => {
  return length > 0 ? (
    <h1>
      <span className="badge bg-primary">
        {length < 4
          ? length === 1
            ? `${length} человек тусанет с тобой сегодня`
            : `${length} человека тусанет с тобой сегодня`
          : `${length} человек тусанет с тобой сегодня`}
      </span>
    </h1>
  ) : (
    <h1>
      <span className="badge bg-warning">Никто не тусанет с тобой</span>
    </h1>
  );
};

export default SearchStatus;
