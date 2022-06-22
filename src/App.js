import { Fragment } from "react";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
// import custom components
import Bar from "./components/Bar/Bar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

// import PostStatus from "./components/PostStatus/PostStatus";
// import GetStatus from "./components/GetStatus/GetStatus";

// const topics = [
//   'home/node1/D1',
//   'home/node1/D2',
//   'home/node1/D6',
//   'livingRoomLight',
//   'livingRoomWindow',
//   'livingRoomFan',
//   'livingRoomHeater',  
//   'receptionLight',
//   'bathroomLight',
//   'bedroomCurtain',
//   'bedroomFan',
//   'kitchenLight'
// ];

// const getStyles = (name, topicName, theme) => {
//   return {
//     fontWeight:
//       topicName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Bar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
