import React,{useState} from 'react'
import { Button, Modal } from "antd";
import { Input } from "antd";

const TeacherModal = ({teacherModal,setTeacherModal,teachers,setTeachers}) => {
  const [teacher, setTeacher] = useState("");
  const [alais, setAlais] = useState("");

  const handleCancel = () => {
    setTeacherModal(false);
  };
  const handleOk = () => {
    if (teacher && alais) {
      const newTeacherObject = { teacher, alais, lectureCount:0 };
      setTeachers((prevTeachers) => [...prevTeachers, newTeacherObject]);
      setTeacherModal(false);
    } else alert("please fill all inputs");
  };

  const updateAlais = (value) => {
    let extractedAlais = value.slice(0, 3);
    if (value.includes(" ")) {
      extractedAlais =
        value.split(" ")[0].charAt(0) + value.split(" ")[1].charAt(0);
    }
    setAlais(extractedAlais);
  };

  const handleTeacherChange = (e) => {
    const newTeacher = e.target.value;
    setTeacher(newTeacher.toUpperCase());
    updateAlais(newTeacher.toUpperCase());
  };
  return (
    <Modal
      title="Enter teacher"
      width={300}
      style={{ top: "40%" }}
      open={teacherModal}
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
        value={teacher}
        onChange={handleTeacherChange}
        placeholder="Teacher Name"
      />
      <Input
        value={alais}
        onChange={(e) => setAlais(e.target.value)}
        placeholder="Short Form"
      />
    </Modal>
  );
};

export default TeacherModal