import React from "react";
import SEO from "../common/seo";
import Schedule from "../components/schedule";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Schedule"} />
      <Schedule />
    </WrapperFour>
  );
};

export default index;
