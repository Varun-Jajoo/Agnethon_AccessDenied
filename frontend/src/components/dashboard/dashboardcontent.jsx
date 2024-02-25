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
import axios from "axios";
import { PiStarFourFill } from "react-icons/pi";
import { FaPaintBrush } from "react-icons/fa";
import { Progress } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
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

const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tues",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thurs",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const NextClassCard = ({ timeLeft }) => {
  return (
    <Card borderRadius="lg" overflow="hidden" boxShadow="md" p="4" bg="white">
      <Text fontSize="xl" fontWeight="semibold" mb="4" color="black">
        Next Class In...
      </Text>
      <Button
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
      </Button>
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
              <GridItem w="100%"  bg="blue.500">
                <Box bg="white" borderRadius={10} padding={1}>
                  <Button
                    leftIcon={<FaPaintBrush color={color1} />}
                    variant={""}
                  >
                    UI/UX Interface design
                  </Button>
                  <Text fontSize={10} p={0} m={0}>
                    Module - User Experience Research (UX Research){" "}
                  </Text>
                  <Progress
                    value={35}
                    colorScheme="red"
                    height={2}
                    borderRadius={10}
                  />
                  <Text fontSize={8}>You've learnt 4 modules from 14</Text>
                  <Button bgColor={color1} color={"white"} width={"full"}>
                    Continue to study
                  </Button>
                </Box>
              </GridItem>
              <GridItem w="100%" bg="blue.500">
                <Box bg="white" borderRadius={10} padding={1}>
                  <Button
                    leftIcon={<FaPaintBrush color={color1} />}
                    variant={""}
                  >
                    UI/UX Interface design
                  </Button>
                  <Text fontSize={10} p={0} m={0}>
                    Mondule - User Experience Research (UX Research){" "}
                  </Text>
                  <Progress
                    value={80}
                    colorScheme="red"
                    borderRadius={10}
                    height={2}
                  />
                  <Text fontSize={8}>You've learnt 10 modules from 14</Text>
                  <Button
                    bgColor={color1}
                    marginTop={0}
                    marginLeft={5}
                    color={"white"}
                  >
                    {" "}
                    Continue to study
                  </Button>
                </Box>
              </GridItem>
            </Grid>
            
          </Box>
        </GridItem>
        <GridItem w="100%" colSpan={1}>
          <NextClassCard timeLeft="5 minutes" />
        </GridItem>
        <GridItem w="100%" colSpan={3}>
          <Box bg="whitesmoke" borderRadius={10} padding={10}>
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
                  dataKey="pv"
                  stroke="#FF6652"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#245D51" />
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
      </Grid>
    </Box>
  );
}
