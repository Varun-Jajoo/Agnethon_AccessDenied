import React from "react";
import Image from 'next/image'

const Icons = ({
  clicked,
  setClicked,
  setSelectedClass,
  setSelectedSubject,
  setSelectedTeacher,
}) => {
  return (
    <div className="icons">
      <div
        onClick={() => {
          setClicked("subjects");
          setSelectedClass(null);
          setSelectedTeacher(null);
          setSelectedSubject(null);
        }}
        style={{ backgroundColor: clicked === "subjects" && "#f0f0f5" }}
        className="img-text"
      >
        <Image src="/assets/img/icons/education.png" width={90} height={90} alt="img" />
        Subjects
      </div>
      <div
        onClick={() => {
          setClicked("classes");
          setSelectedClass(null);
          setSelectedTeacher(null);
          setSelectedSubject(null);
        }}
        style={{ backgroundColor: clicked === "classes" && "#f0f0f5" }}
        className="img-text"
      >
        <Image src="/assets/img/icons/pngwing.com.png" width={90} height={90} alt="img" />
        Classes
      </div>
      <div
        onClick={() => {
          setClicked("teachers");
          setSelectedClass(null);
          setSelectedTeacher(null);
          setSelectedSubject(null);
        }}
        style={{ backgroundColor: clicked === "teachers" && "#f0f0f5" }}
        className="img-text"
      >
        <Image src="/assets/img/icons/teacher.png" width={90} height={90} alt="img" />
        Teachers
      </div>
    </div>
  );
};

export default Icons;
