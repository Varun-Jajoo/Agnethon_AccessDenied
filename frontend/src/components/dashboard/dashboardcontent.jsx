"use client";

import {
  Box,
  chakra,
  Flex,
  HStack,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Card,
  Grid,
  Image,
  Button,
  Spacer,
  GridItem,
  Link,
  Divider,
  Container,
} from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import axios from "axios";
import { PiStarFourFill } from "react-icons/pi";
import { FaPaintBrush } from "react-icons/fa";
import { Progress } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
const color2 = "#FF6652";
const color1 = "#245D51";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LinkGenerator from "./meetcreation";
import MiniCalendar from "./calender";
import { Input } from "antd";
const data = [
  {
    name: 'Mon',
    'Last-week': 20,
    'This-week': 12,
    amt: 12,
  },
  {
    name: 'Tues',
    'Last-week': 15,
    'This-week': 8,
    amt: 10,
  },
  {
    name: 'Wed',
    'Last-week': 10,
    'This-week': 55,
    amt: 11,
  },
  {
    name: 'Thurs',
    'Last-week': 14,
    'This-week': 20,
    amt: 10,
  },
  {
    name: 'Fri',
    'Last-week': 9,
    'This-week': 25,
    amt: 11,
  },
  {
    name: 'Sat',
    'Last-week': 12,
    'This-week': 20,
    amt: 13,
  },
  {
    name: 'Sun',
    'Last-week': 18,
    'This-week': 22,
    amt: 11,
  },
];
const NextClassCard = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vf1924n', 'template_f6l2onx', form.current, {
        publicKey: 'Imk9sSRKC6LwoUVC7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Card borderRadius="lg" overflow="hidden" boxShadow="md" p="4" bg="white">
     <Button leftIcon={<PiStarFourFill  color='#FF6652' />} variant={""}
     size={"xl"}
      fontSize="xl" fontWeight="semibold" mb="4" color="black"
      alignSelf="left"
      >Enter Your file</Button>
     
     
     <input
    type="file"
    
    style={{
        variant: "outline",
        borderColor: "#FF6652",
        color: "#FF6652",
        backgroundColor: "#FFD8BF",
        _hover: { backgroundColor: '#FFBFA7' },
        fontWeight: "bold",
        fontSize: "14px",
        borderRadius: "20px",
        padding: "8px 16px",
        margin: "10px 0"
    }}
/>
      {/* <Button
        colorScheme="green"
        variant={"outline"}
        rounded={"full"}
        borderWidth="2px"
      >

        <Text color="teal.500" m="2" fontWeight="semibold">
          {timeLeft}
        </Text>
        <Divider my="2" />
        <Text></Text>
        <label htmlFor="input" style={{marginTop:"10px"}}>Upload File</label>
        <input type="file" id="input" style={{marginTop:"10px"}} />
      </Button> */}
      {/* <Text fontWeight="semibold" fontSize="lg" color="black">29 Jan | 37$ </Text>
      <Text fontWeight="semibold" fontSize="m"  >In order to have access to your account please pay your monthy fee </Text> */}
      <form ref={form} onSubmit={sendEmail}>
      {/* <input type="text" name="user_name" /> */}
      <input className="zoom_button" type="submit" value="Send" />
    </form>
 {/* <Button bgColor={color1} ref={form} color={"white"} width={"full"} style={{marginTop:"50px"}} onClick={sendEmail}>
                    Send Email
                  </Button> */}
    </Card>
  );
};

const MeetingLink = ({ meeting }) => {
  const { id, topic, start_time, duration, timezone, join_url } = meeting;

  return (
    <Box borderRadius="lg" p="4" marginBottom="4">
      <Text fontSize="xl" fontWeight="semibold">
        {topic}
      </Text>
      <Text>Meeting ID: {id}</Text>
      <Text>Start Time: {new Date(start_time).toLocaleString()}</Text>
      <Text>Duration: {duration} minutes</Text>
      <Text>Timezone: {timezone}</Text>
      <Link href={join_url} isExternal>
        <Button colorScheme="blue">Join</Button>
      </Link>
    </Box>
  );
};

export default function dashboardContent() {
  const [responseData, setResponseData] = useState({});
  useEffect(() => {
    console.log(responseData);
  }, [responseData]);
  // Function to handle getting meetings
  const handleGetMeetings = async () => {
    try {
      const response = await axios.get("http://localhost:3005/getmeetings");
      setResponseData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle getting meetings
  const authzoom = async () => {
    try {
      const response = await axios.get("http://localhost:3005/auth/zoom");
      setResponseData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to handle creating a meeting
  const handleCreateMeeting = async () => {
    const meetingData = {
      topic: "Meeting Topic",
      start_time: new Date().toISOString(),
      type: 2,
      duration: 60,
      timezone: "UTC",
      agenda: "Meeting Agenda",
    };

    try {
      const response = await axios.get("http://localhost:3005/createmeeting", {
        params: meetingData,
      });
      setResponseData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={"left"} fontSize={"4xl"} fontWeight={"bold"}>
        Dashboard
      </chakra.h1>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        bgColor={"gray.100"}
        borderRadius={10}
        p={5}
      >
        <GridItem w="100%" colSpan={2}>
          <Box width={"100%"} borderRadius={4} bg={"white"} p={2}>
            <HStack justify={"space-between"}>
              <Button
                leftIcon={<PiStarFourFill color="#FF6652" />}
                variant={""}
                size={"xl"}
              >
                {" "}
                Ongoing Courses
              </Button>

              <Button
                rightIcon={<FaChevronRight color={color1} />}
                variant={""}
                alignSelf={"right"}
                color={color1}
              >
                {" "}
                View all
              </Button>
            </HStack>

            <Divider my={2} />

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                w="100%"
                border={"1px"}
                borderColor={"gray.200"}
                borderRadius={2}
                p={4}
              >
                <Box bg="white" borderRadius={10}>
                  <Button
                    leftIcon={<FaPaintBrush color={color1} />}
                    variant={""}
                  >
                    UI/UX Interface design
                  </Button>
                  <Text fontSize={10}>
                    Module - User Experience Research (UX Research){" "}
                  </Text>
                  <Progress
                    value={35}
                    colorScheme="red"
                    size={"sm"}
                    borderRadius={10}
                  />
                  <Text fontSize={8}>You've learnt 4 modules from 14</Text>
                  <Button bgColor={color1} color={"white"} width={"full"}>
                    Continue to study
                  </Button>
                </Box>
              </GridItem>

              <GridItem
                w="100%"
                border={"1px"}
                borderColor={"gray.200"}
                borderRadius={2}
                p={4}
              >
                <Box bg="white" borderRadius={10}>
                  <Button
                    leftIcon={<FaPaintBrush color={color1} />}
                    variant={""}
                  >
                    UI/UX Interface design
                  </Button>
                  <Text fontSize={10}>
                    Module - User Experience Research (UX Research){" "}
                  </Text>
                  <Progress
                    value={35}
                    colorScheme="red"
                    size={"sm"}
                    borderRadius={10}
                  />
                  <Text fontSize={8}>You've learnt 4 modules from 14</Text>
                  <Button bgColor={color1} color={"white"} width={"full"}>
                    Continue to study
                  </Button>
                </Box>
              </GridItem>

              <GridItem
                w="100%"
                border={"1px"}
                borderColor={"gray.200"}
                borderRadius={2}
                p={4}
              >
                <Box bg="white" borderRadius={10}>
                  <Button
                    leftIcon={<FaPaintBrush color={color1} />}
                    variant={""}
                  >
                    UI/UX Interface design
                  </Button>
                  <Text fontSize={10}>
                    Module - User Experience Research (UX Research){" "}
                  </Text>
                  <Progress
                    value={35}
                    colorScheme="red"
                    size={"sm"}
                    borderRadius={10}
                  />
                  <Text fontSize={8}>You've learnt 4 modules from 14</Text>
                  <Button bgColor={color1} color={"white"} width={"full"}>
                    Continue to study
                  </Button>
                </Box>
              </GridItem>

            </Grid>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={1} height={"100%"}>
          <NextClassCard  />
        </GridItem>
        <GridItem w="100%" colSpan={3}>
          <Box bg="white" borderRadius={10} padding={10} boxShadow="2xl" height="400px" >
            <Button leftIcon={<PiStarFourFill color="#FF6652" />} variant={""}>
              Average Attendance
            </Button>

            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Last-week"
                  stroke="#FF6652"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="This-week" stroke="#245D51" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={3}>
          <Box p={5} borderRadius={10} rowSpan={1}>
            <Button onClick={handleGetMeetings} mr={2}>
              Get Meetings
            </Button>
            <Button onClick={handleCreateMeeting} mr={2}>
              Create Meeting
            </Button>
            <LinkGenerator />
          </Box>

          {responseData && (
            <div>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // 1 column on small devices, 2 columns on larger devices
                gap={6} // Gap between grid items
              >
                {responseData.meetings &&
                  responseData.meetings.map((meeting) => (
                    <GridItem colSpan={1}>
                      <MeetingLink key={meeting.uuid} meeting={meeting} />
                    </GridItem>
                  ))}
              </Grid>
            </div>
          )}
        </GridItem>
        <GridItem w="100%" colSpan={3}>
          <MiniCalendar/>
        </GridItem>
      </Grid>
    </Box>
  );
}
