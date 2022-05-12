import { Fragment, useEffect, useState } from "react";
import { Container, Typography, Box, Button, InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Bar from "./components/Bar/Bar";
import TopicStatus from "./components/TopicStatus/TopicStatus";
import axios from "axios";

const topics = [
  'lightbulbTopic',
  'lightbulbReadings',
  'fanSensor',
  'motorSensor',
  'motorSensorPublish',
  'TemperatureSensor',
  'lightIntensity',
  'proximitySensor ',
];

const getStyles = (name, topicName, theme) => {
  return {
    fontWeight:
      topicName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const App = () => {
  const [topicName, setTopicName] = useState('');
  const theme = useTheme();


  const handleChange = (event) => {
    setTopicName(event.target.value);
  };

  const GetData = () => {
    const res = axios.get(`https://u81oc46ubj.execute-api.us-east-2.amazonaws.com/default/accessIoTtopicUsingAPI?topic=${topicName}`,
      {
        headers: {
          'Content-type': 'application/json',
          'X-API-KEY': 'ub0ngFgXo13NasQw9iNca1fCysQUTuDa6zOL6GrN',
        }
      })
    return res;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (topicName.length !== 0) {
      try {
        const { data } = await GetData()
        console.log(data)
      }
      catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <Fragment>
      <Bar />
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "auto",
            boxShadow: 3,
            borderRadius: 2,
            p: "16px",
            mb: 5,
            mt: 5,
          }}
        >
          <Box sx={{ width: "100%", mb: "2px" }}>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "600", padding: "0 2px" }}
            >
              Choose a topic
            </Typography>
            <Typography
              sx={{ fontSize: "14px", padding: "0 2px", mt: "2px" }}
            >
              choose a topic from list below.
            </Typography>
          </Box>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Topic Name</InputLabel>
            <Select
              value={topicName}
              label="Topic Name"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {topics.map((topic) => (
                <MenuItem
                  key={topic}
                  value={topic}
                  style={getStyles(topic, topicName, theme)}
                >
                  {topic}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ mt: 2, mb: 3 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                maxHeight: 45,
                alignSelf: "flex-start",
                fontSize: "14px",
              }}
            >
              get Status
            </Button>
          </Box>
        </Box>
        <TopicStatus />

      </Container>
    </Fragment>
  );
}

export default App;
