import { Fragment } from "react";
import { Container } from "@mui/material";
// import custom components
import Bar from "./components/Bar/Bar";
import PostStatus from "./components/PostStatus/PostStatus";
import GetStatus from "./components/GetStatus/GetStatus";

const topics = [
  'lightbulbTopic',
  'lightbulbReadings',
  'livingRoomFan',
  'livingRoomHeater',
  'livingRoomLight',
  'livingRoomWindow',
  'receptionLight',
  'bathroomLight',
  'bedroomCurtain',
  'bedroomFan',
  'kitchenLight'
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
  return (
    <Fragment>
      <Bar />
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <GetStatus Topics={topics} getStyles={getStyles} />
        <PostStatus Topics={topics} getStyles={getStyles} />
      </Container>
    </Fragment>
  );
}

export default App;
