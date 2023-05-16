import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookMark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onToggleBookMark,
}) => {
  return (
    <>
      <tr key={_id}>
        <td>{name}</td>
        <td>
          {qualities.map((qual) => {
            return <Qualitie key={qual._id} {...qual} />;
          })}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}/5</td>
        <td>
          <BookMark status={bookmark} id={_id} onToggle={onToggleBookMark} />
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => onDelete(_id)}>
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
