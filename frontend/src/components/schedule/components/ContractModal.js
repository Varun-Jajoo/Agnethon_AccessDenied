import React, { useState } from "react";
import { Button, Modal } from "antd";
import { IoIosAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import LessonModal from "./LessonModal";
import Image from 'next/image'

const ContractModal = ({
  contractModal,
  setContractModal,
  teacherIndex,
  teachers,
  functionCalls,
  setFunctionCalls,
  subjects,
  classes,
  setTeachers,
}) => {
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [lessonModal, setLessonModal] = useState(false);

  const handleDelete = () => {
    if (selectedFunction !== null) {
      const updatedCall = functionCalls.filter(
        (_, index) => index !== selectedFunction
      );
      setFunctionCalls(updatedCall);
      setSelectedFunction(null);
    }
  };

  const handleEdit = () => {
    setLessonModal(true);
  };

  const handleOk = () => {
    setContractModal(false);
  };

  const handleCancel = () => {
    setContractModal(false);
  };

  const handleFunctionClick = (index) => {
    setSelectedFunction(index === selectedFunction ? null : index);
  };

  return (
    <Modal
      title="Contract"
      width={1000}
      open={contractModal}
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
      <div className="contract-main">
        <div className="contract-logo">
        <Image src="/assets/img/icons/lesson.png" width={90} height={90} alt="img" />
          <div className="contract-title">
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {teachers[teacherIndex].teacher}
            </span>
            <span>{teachers[teacherIndex].alais}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div className="contract-listarea">
            <div className="contract-row">
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Subject
              </span>
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Teacher
              </span>
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Class
              </span>
              <span style={{ flex: 1, padding: "5px", fontWeight: "bold" }}>
                Count
              </span>
            </div>
            <div className="scrollable-container-contract">
              <div className="content">
                {functionCalls
                  .filter(
                    (call) => call.teacher === teachers[teacherIndex].teacher
                  )
                  .map((call, i) => (
                    <div
                      key={i}
                      className={`contract-row ${
                        i === selectedFunction ? "selected-subject" : ""
                      }`}
                      onClick={() => handleFunctionClick(i)}
                    >
                      <span style={{ flex: 1, padding: "5px" }}>
                        {call.subject}
                      </span>
                      <span style={{ flex: 1, padding: "5px" }}>
                        {call.teacher}
                      </span>
                      <span style={{ flex: 1, padding: "5px" }}>
                        {call.targetClass}
                      </span>
                      <span style={{ flex: 1, padding: "5px" }}>
                        {call.sessions}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="functions">
            <div
              onClick={() => setLessonModal(true)}
              style={{ cursor: "pointer" }}
              className="func"
            >
              <IoIosAdd color="green" size={30} />
              New
            </div>
            <div
              onClick={handleDelete}
              style={{ cursor: "pointer" }}
              className="func"
            >
              <RxCross2 color="red" size={24} />
              Delete
            </div>
            <div
              onClick={handleEdit}
              style={{ cursor: "pointer" }}
              className="func"
            >
              <MdEdit size={20} color="#72bcd4" />
              Edit
            </div>
          </div>
        </div>
      </div>
      {lessonModal && (
        <LessonModal
          lessonModal={lessonModal}
          setLessonModal={setLessonModal}
          teachers={teachers}
          classes={classes}
          subjects={subjects}
          teacher={teachers[teacherIndex].teacher}
          functionCalls={functionCalls}
          setFunctionCalls={setFunctionCalls}
          setTeachers={setTeachers}
        />
      )}
    </Modal>
  );
};

export default ContractModal;
