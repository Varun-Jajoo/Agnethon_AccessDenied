
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseArea from "./course-area";

const CourseGrid = () => {
  return (
    <>
      <Breadcrumb title="Course Grid" subtitle="Course Grid" isDbbl="Course" />
      <CourseArea />
      <CounterArea />
    </>
  );
};

export default CourseGrid;
