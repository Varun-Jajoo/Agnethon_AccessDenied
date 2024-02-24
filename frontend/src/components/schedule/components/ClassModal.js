import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";

const ClassModal = ({ classes, setClasses, classModal, setClassModal }) => {
  const [division, setDivision] = useState("");
  const handleCancel = () => {
    setClassModal(false);
  };
  const handleClassChange = (e) => {
    const newSubject = e.target.value;
    setDivision(newSubject.toUpperCase());
  };
  const handleOk = () => {
    if (division) {
      const newClassObject =  division ;
      setClasses((prevClasses) => [...prevClasses, newClassObject]);
      setClassModal(false);
    } else alert("please fill all inputs");
  };
  return (
    <Modal
      title="Enter Class"
      width={300}
      style={{ top: "40%" }}
      open={classModal}
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
        value={division}
        onChange={handleClassChange}
        placeholder="Class Name"
      />
    </Modal>
  );
};

export default ClassModal;