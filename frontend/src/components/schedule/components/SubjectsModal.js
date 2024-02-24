import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";

const SubjectsModal = ({ subModal, setSubModal, subjects, setSubjects }) => {
  const [subject, setSubject] = useState("");
  const [alais, setAlais] = useState("");

  const handleCancel = () => {
    setSubModal(false);
  };
  const handleOk = () => {
    if (subject && alais) {
      const newSubjectObject = { subject, alais };
      setSubjects((prevSubjects) => [...prevSubjects, newSubjectObject]);
      setSubModal(false);
    } else alert("please fill all inputs");
  };

  const updateAlais = (value) => {
    let extractedAlais = value.slice(0, 3);
    if (value.includes(" ")) {
      extractedAlais =
        value.split(" ")[0].charAt(0) + "." + value.split(" ")[1].charAt(0);
    }
    setAlais(extractedAlais);
  };

  const handleSubjectChange = (e) => {
    const newSubject = e.target.value;
    setSubject(newSubject.toUpperCase());
    updateAlais(newSubject.toUpperCase());
  };
  return (
    <Modal
      title="Enter Subject"
      width={300}
      style={{ top: "40%" }}
      open={subModal}
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
      <Input
        style={{ marginBottom: "10px" }}
        value={subject}
        onChange={handleSubjectChange}
        placeholder="Subject Name"
      />
      <Input
        value={alais}
        onChange={(e) => setAlais(e.target.value)}
        placeholder="Short Form"
      />
    </Modal>
  );
};

export default SubjectsModal;
