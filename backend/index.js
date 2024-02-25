require("dotenv").config();

const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
// Use the cors middleware
app.use(cors());

const port = 3005;
var token='eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjM2ODg4OWU1LTUyM2UtNDE1MS05MWY1LTM5YThhZGUxYjdjYyJ9.eyJ2ZXIiOjksImF1aWQiOiIwODVjZTU2MDZlNTZkNjJiZGUwNTRiOWFhNTlhMTZjNCIsImNvZGUiOiJOQVA3aWFTbHJ3M2FwcHNRLWluUU9pVlFxRVpzTWNaYWciLCJpc3MiOiJ6bTpjaWQ6d1dmakFYWXlTb0s4TEdfQ2J3RWhnZyIsImdubyI6MCwidHlwZSI6MCwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJqTm02M3BMZlF4eVNsYzFfSVh6MEh3IiwibmJmIjoxNzA4NzEyNzE0LCJleHAiOjE3MDg3MTYzMTQsImlhdCI6MTcwODcxMjcxNCwiYWlkIjoiM2NSSDd4V01RbkdSclJNb1dYZUdIUSJ9.qVH9H4GbhsYEe4bhiFvdVYafbVMWVZov6gYlx1OVLl1tMjsNrEWvN6Gk2vjoOtr20IhKo8o4PkudzsCFJ56wMw';

async function getMeetings() {
  try {
    const response = await axios.get(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}

async function createMeeting(
  topic,
  start_time,
  type,
  duration,
  timezone,
  agenda
) {
  try {
    const response = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        topic,
        type,
        start_time,
        duration,
        timezone,
        agenda,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: false,
          mute_upon_entry: true,
          watermark: false, 
          use_pmi: false,
          approval_type: 0,
          audio: "both",
          auto_recording: "none",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const body = response.data;
    return body;
  } catch (error) {
    console.error("Error", error);
  }
}

app.get("/", async (req, res) => {
  const code = req.query.code;
  try {
    const response = await axios.post("https://zoom.us/oauth/token", null, {
      params: {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjM2ODg4OWU1LTUyM2UtNDE1MS05MWY1LTM5YThhZGUxYjdjYyJ9.eyJ2ZXIiOjksImF1aWQiOiIwODVjZTU2MDZlNTZkNjJiZGUwNTRiOWFhNTlhMTZjNCIsImNvZGUiOiJOQVA3aWFTbHJ3M2FwcHNRLWluUU9pVlFxRVpzTWNaYWciLCJpc3MiOiJ6bTpjaWQ6d1dmakFYWXlTb0s4TEdfQ2J3RWhnZyIsImdubyI6MCwidHlwZSI6MCwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJqTm02M3BMZlF4eVNsYzFfSVh6MEh3IiwibmJmIjoxNzA4NzEyNzE0LCJleHAiOjE3MDg3MTYzMTQsImlhdCI6MTcwODcxMjcxNCwiYWlkIjoiM2NSSDd4V01RbkdSclJNb1dYZUdIUSJ9.qVH9H4GbhsYEe4bhiFvdVYafbVMWVZov6gYlx1OVLl1tMjsNrEWvN6Gk2vjoOtr20IhKo8o4PkudzsCFJ56wMw:teOc1MDvDJljHOZ80cCtCCGO4mk25mF8`
        ).toString("base64")}`,
      },
    });
    token = response.data.access_token;
    res.redirect("http://localhost:3000/dashboard");
  } catch (error) {
    console.error("Error", error);
    res.send("Error");
  }
});

app.get("/createmeeting", async (req, res) => {
  const topic = req.query.topic;
  const start_time = req.query.start_time;
  const type = req.query.type;
  const duration = req.query.duration;
  const timezone = req.query.timezone;
  const agenda = req.query.agenda;
  const response = await createMeeting(
    topic,
    start_time,
    type,
    duration,
    timezone,
    agenda
  );
  res.send(response);
});

app.get("/getmeetings", async (req, res) => {
  const response = await getMeetings();
  res.send(response);
});

app.get("/auth/zoom", (req, res) => {
  const clientId = process.env.ZOOM_API_KEY;
  const redirect_uri = encodeURIComponent(process.env.REDIRECT_URI);
  const responseType = "code";
  console.log(redirect_uri);
  const authorizationUrl = `https://zoom.us/oauth/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirect_uri}`;
  res.redirect(authorizationUrl);
});

app.get("/callback", async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send("No code provided");
  }
  try {
    const response = await axios.post("https://zoom.us/oauth/token", null, {
      params: {
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.REDIRECT_URI,
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.ZOOM_API_KEY}:${process.env.ZOOM_API_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.send("Error obtaining token");
  }
});

app.get("/refreshToken", async (req, res) => {
  try {
    const refresh_token = req.query.refreshToken;

    const response = await axios.post("https://zoom.us/oauth/token", null, {
      params: {
        grant_type: "refresh_token",
        refresh_token,
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.ZOOM_API_KEY}:${process.env.ZOOM_API_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error", error);
    res.send("Error refreshing token");
  }
});

app.listen(port, () => {
  console.log("http://localhost:3005");
});
