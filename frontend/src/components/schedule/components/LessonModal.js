import React, { useState } from "react";
import { Button, Modal, Input, Select } from "antd";
import Image from 'next/image'

const LessonModal = ({
  lessonModal,
  setLessonModal,
  subjects,
  teachers,
  classes,
  teacher,
  functionalCalls,
  setFunctionCalls,
  setTeachers,
}) => {
  const [sub, setSub] = useState("");
  const [div, setDiv] = useState("");
  const [lec, setLec] = useState("");

  const onChange = (value) => {
    setSub(value);
  };

  function onDivChange(value) {
    setDiv(value);
  }

  function onLecChange(e) {
    setLec(parseInt(e.target.value, 10));
  }

  const handleOk = () => {
      if(sub && div && lec){
    setFunctionCalls((prev) => [
      ...prev,
      { teacher, subject: sub, sessions: lec, targetClass: div },
    ]);
    setTeachers(prevTeachers => {
      const teacherIndex = prevTeachers.findIndex(teach => teach.teacher === teacher);
      if (teacherIndex !== -1) {
        const updatedTeachers = [...prevTeachers];
        updatedTeachers[teacherIndex] = {
          ...updatedTeachers[teacherIndex],
          lectureCount: updatedTeachers[teacherIndex].lectureCount + lec,
        };
    
        return updatedTeachers;
      }
      return prevTeachers;
    });
    setLessonModal(false);
}else alert("enter all values")
  };

  const handleCancel = () => {
    setLessonModal(false);
  };

  return (
    <Modal
      title="Lesson"
      style={{ top: 143 }}
      width={400}
      open={lessonModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Close
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <div className="lesson">
        <div className="lesson-child">
        <Image src="/assets/img/icons/teacher.png" width={80} height={80} alt="img" />
          <span style={{ fontSize: "17px", fontWeight: "600" }}>{teacher}</span>
        </div>
        <div className="lesson-child">
        <Image src="/assets/img/icons/education.png" width={80} height={80} alt="img" />
          <Select
            placeholder="Select a Subject"
            onChange={onChange}
            options={subjects.map((subjectObj) => ({
              value: subjectObj.subject,
              label: subjectObj.alias,
            }))}
          />
        </div>
        <div className="lesson-child">
        <Image src="/assets/img/icons/pngwing.com.png" width={80} height={80} alt="img" />
          <Select
            placeholder="Select a Class"
            onChange={onDivChange}
            options={classes.map((div) => ({
              value: div,
              label: div,
            }))}
          />
        </div>
        <div className="lesson-child">
        <Image src="/assets/img/icons/calendar1.png" width={80} height={80} alt="img" />
          <Input
            onChange={(e) => onLecChange(e)}
            value={lec}
            style={{ width: "230px" }}
            type="number"
            placeholder="Lessons/Week"
          />
        </div>
      </div>
    </Modal>
  );
};

export default LessonModal;
