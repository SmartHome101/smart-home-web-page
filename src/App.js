import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
// import custom components
import Bar from "./components/Bar/Bar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import WeatherApp from "./pages/WeatherApp/WeatherApp";
import Rooms from "./pages/Rooms/Rooms";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      {/* <Bar /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
