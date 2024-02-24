'use client'
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import Image from 'next/image'
const InitialModal = ({
  setDays,
  setPeriods,
  setInfoModal,
  isModalOpen,
  setIsModalOpen,
}) => {
  const showModal = () => {
    setIsModalOpen(true);
    console.log("click modal");
  };
  const handleOk = () => {
    setInfoModal(true);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <Button
          type="primary"
          onClick={showModal}
          style={{
            backgroundColor: "#164863",
            borderRadius: "99px",
            height: "50px",
            width: "180px",
            fontSize: "18px",
            fontWeight: "600",
            marginTop: "10px",
          }}
        >
          Enter Details
        </Button>
      </div>
      <Modal
        title="Enter Details"
        width={560}
        open={isModalOpen}
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            borderRadius: 10,
            border: "1px solid #f0f0f5",
          }}
        >
          <div style={{}}>
            <Image src="/assets/img/icons/calendar.png" width={60} height={60} alt="img" />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p style={{ width: "200px" }}>Periods per day</p>
              <Input
                onChange={(e) => setPeriods(e.target.value)}
                placeholder=""
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p style={{ width: "200px" }}>Number of days</p>
              <Input onChange={(e) => setDays(e.target.value)} placeholder="" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            ></div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default InitialModal;
