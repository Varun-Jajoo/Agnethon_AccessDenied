import React from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper";
import { useEffect, useState } from "react";
import Dashboard from "../components/dashboard/dashboard";
// import { ChakraProvider,extendTheme ,Box,} from "@chakra-ui/react";

// const theme = extendTheme({
//     colors: {
//       brand: {
//         100: "#f7fafc",
//         900: "#1a202c",
//       },
//     },
//   })
  


const index = () => {

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3005/getmeetings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <WrapperFour>
      <SEO pageTitle={"Meet"} />
      <Dashboard data={jsonData} />
    </WrapperFour>
  );
};

export default index;
