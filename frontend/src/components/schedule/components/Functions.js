import React from "react";
import { IoIosAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaChalkboardTeacher } from "react-icons/fa";

const Functions = ({ handleNew, handleDelete, clicked, handleLessonClick }) => {
  return (
    <div className="functions">
      <div onClick={handleNew} style={{cursor:'pointer'}} className="func">
        <IoIosAdd color="green" size={30} />
        New
      </div>
      <div onClick={handleDelete} style={{cursor:'pointer'}} className="func">
        <RxCross2 color="red" size={24} />
        Delete
      </div>
      {clicked === "teachers" && <div
      style={{cursor:'pointer'}}
        onClick={() => {
          if (clicked === "teachers") handleLessonClick();
        }}
        className="func"
      >
        <FaChalkboardTeacher size={20} color="#72bcd4" />
        Lessons
      </div> }
      
    </div>
  );
};

export default Functions;
