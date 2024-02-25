import { animationCreate } from "@/utils/utils";
import React, { useEffect } from "react";
import BackToTop from "../lib/BackToTop";
import FooterThree from "./footers/footer-3";
import HeaderTwo from "./headers/header-3";

const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <>
      
      {children}
      <FooterThree />
      <BackToTop />
    </>
  );
};

export default Wrapper;