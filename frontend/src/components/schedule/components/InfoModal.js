import React, { useState } from "react";
import { Button, Modal } from "antd";
import SubjectsModal from "./SubjectsModal";
import ClassModal from "./ClassModal";
import TeacherModal from "./TeacherModal";
import Icons from "./Icons";
import Functions from "./Functions";
import ContractModal from "./ContractModal";

const InfoModal = ({
  infoModal,
  setInfoModal,
  functionCalls,
  setFunctionCalls,
  classes,
  setClasses,
  subjects,
  setSubjects,
  teachers,
  setTeachers,
}) => {
  const [clicked, setClicked] = useState("subjects");
  const [subModal, setSubModal] = useState(false);
  const [classModal, setClassModal] = useState(false);
  const [teacherModal, setTeacherModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [contractModal, setContractModal] = useState(false);

  const handleOk = () => {
    setInfoModal(false);
  };

  const handleCancel = () => {
    setInfoModal(false);
  };

  const handleNew = () => {
    if (clicked === "subjects") setSubModal(true);
    else if (clicked === "classes") setClassModal(true);
    else if (clicked === "teachers") setTeacherModal(true);
  };

  const handleDelete = () => {
    if (selectedSubject !== null) {
      const updatedSubjects = subjects.filter(
        (_, index) => index !== selectedSubject
      );
      setSubjects(updatedSubjects);
      setSelectedSubject(null);
    } else if (selectedClass !== null) {
      const updatedClasses = classes.filter(
        (_, index) => index !== selectedClass
      );
      setClasses(updatedClasses);
      setSelectedClass(null);
    } else if (selectedTeacher !== null) {
      const updatedTeacher = teachers.filter(
        (_, index) => index !== selectedTeacher
      );
      setTeachers(updatedTeacher);
      setSelectedTeacher(null);
    }
  };

  const handleSubjectClick = (index) => {
    setSelectedSubject(index === selectedSubject ? null : index);
    setSelectedClass(null);
    setSelectedTeacher(null);
  };

  const handleClassClick = (index) => {
    setSelectedClass(index === selectedClass ? null : index);
    setSelectedSubject(null);
    setSelectedTeacher(null);
  };

  const handleTeacherClick = (index) => {
    setSelectedTeacher(index === selectedTeacher ? null : index);
    setSelectedClass(null);
    setSelectedSubject(null);
  };

  const handleLessonClick = () => {
    if (selectedTeacher !== null) setContractModal(true);
  };

  return (
    <div>
      <Modal
        title="Enter Details"
        width={1000}
        closeIcon={false}
        open={infoModal}
        onOk={handleOk}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <div className="main">
          <Icons
            clicked={clicked}
            setClicked={setClicked}
            setSelectedClass={setSelectedClass}
            setSelectedSubject={setSelectedSubject}
            setSelectedTeacher={setSelectedTeacher}
          />
          <div className="listarea">
            <div className="rows">
              <span style={{ flex: 2, padding: "5px", fontWeight: "bold" }}>
                Name
              </span>
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Alais
              </span>
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Count
              </span>
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Color
              </span>
            </div>
            {clicked === "subjects" && subjects.length > 0 ? (
              <div className="scrollable-container">
                <div className="content">
                  {subjects?.map((subject, index) => (
                    <div
                      className={`rows ${
                        index === selectedSubject ? "selected-subject" : ""
                      }`}
                      key={index}
                      onClick={() => handleSubjectClick(index)}
                    >
                      <span style={{ flex: 2, padding: "5px" }}>
                        {subject.subject}
                      </span>
                      <span style={{ flex: 1, padding: "5px" }}>
                        {subject.alais}
                      </span>
                      <span style={{ flex: 1, padding: "5px" }}>-</span>
                      <span style={{ flex: 1, padding: "5px" }}>-</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : clicked === "classes" ? (
              <div className="scrollable-container">
                <div className="content">
                  {classes?.map((div, index) => (
                    <div
                      className={`rows ${
                        index === selectedClass ? "selected-subject" : ""
                      }`}
                      key={index}
                      onClick={() => handleClassClick(index)}
                    >
                      <span style={{ flex: 2, padding: "5px" }}>{div}</span>
                      <span style={{ flex: 1, padding: "5px" }}>-</span>
                      <span style={{ flex: 1, padding: "5px" }}>-</span>
                      <span style={{ flex: 1, padding: "5px" }}>-</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : clicked === "teachers" ? (
              <div className="scrollable-container">
                <div className="content">
                  {teachers?.map((teacher, index) => (
                    <div
                      className={`rows ${
                        index === selectedTeacher ? "selected-subject" : ""
                      }`}
                      key={index}
                      onClick={() => handleTeacherClick(index)}
                    >
                      <span style={{ flex: 2, padding: "5px" }}>
                        {teacher.teacher}
                      </span>
                      <span style={{ flex: 1, padding: "5px" }}>
                        {teacher.alais}
                      </span>
                      <span style={{ flex: 1, padding: "5px" }}>
                        {teacher.lectureCount}
                      </span>
                      <span style={{ flex: 1, padding: "5px" }}>-</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Functions
            handleDelete={handleDelete}
            handleNew={handleNew}
            clicked={clicked}
            handleLessonClick={handleLessonClick}
          />
        </div>
        <span
          style={{
            top: "40px",
            position: "absolute",
            fontSize: "15px",
            left: "200px",
          }}
        >
          Enter {clicked.charAt(0).toUpperCase() + clicked.slice(1)} :
        </span>
      </Modal>
      {subModal && (
        <SubjectsModal
          subModal={subModal}
          setSubModal={setSubModal}
          subjects={subjects}
          setSubjects={setSubjects}
        />
      )}
      {classModal && (
        <ClassModal
          classModal={classModal}
          setClassModal={setClassModal}
          classes={classes}
          setClasses={setClasses}
        />
      )}
      {teacherModal && (
        <TeacherModal
          teacherModal={teacherModal}
          setTeacherModal={setTeacherModal}
          teachers={teachers}
          setTeachers={setTeachers}
        />
      )}
      {contractModal && (
        <ContractModal
          contractModal={contractModal}
          setContractModal={setContractModal}
          teacherIndex={selectedTeacher}
          teachers={teachers}
          functionCalls={functionCalls}
          setFunctionCalls={setFunctionCalls}
          subjects={subjects}
          classes={classes}
          setTeachers={setTeachers}
        />
      )}
    </div>
  );
};

export default InfoModal;
