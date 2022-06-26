import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
// import custom components
import Bar from "./components/Bar/Bar";
import TestAPI from "./pages/TestAPI/TestAPI";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import WeatherApp from "./pages/WeatherApp/WeatherApp";
import Rooms from "./pages/Rooms/Rooms";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/test-api" element={<TestAPI />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
