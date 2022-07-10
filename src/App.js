import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

//import icons for Rooms page
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";

// import custom components
import Bar from "./components/Bar/Bar";
import TestAPI from "./pages/TestAPI/TestAPI";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/home/home";
import WeatherApp from "./pages/WeatherApp/WeatherApp";
import Rooms from "./pages/Rooms/Rooms";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFound from "./pages/NotFound/NotFound";

//import avatars of TecHome Team
import ramadan from "../src/assets/techHomeTeam/mahmoudRamadan.jpg";
import nabil from "../src/assets/techHomeTeam/mohamedNabil.jpg";
import sabek from "../src/assets/techHomeTeam/mohamedSabek.jpg";
import mohamedNour from "../src/assets/techHomeTeam/mohamedNour.jpg";
import eman from "../src/assets/techHomeTeam/eman.jpeg";
import bebars from "../src/assets/techHomeTeam/bebars.jpg";
import alfy from "../src/assets/techHomeTeam/alfy.JPG";
import salma from "../src/assets/techHomeTeam/salma.jpg";
import Roqia from "../src/assets/techHomeTeam/Roqia.jpeg";
import blank_avatar from "../src/assets/techHomeTeam/blank_avatar.png";

// import icons to our services
import mobileDevelopment from './assets/servicesImages/app-development.png'
import webDevelopment from './assets/servicesImages/web-development.png'
import iotSolutions from './assets/servicesImages/technology.png'
import facialRecognition from './assets/servicesImages/facial-recognition.png'
import nlp from './assets/servicesImages/natural-language-processing.png'
import ml from './assets/servicesImages/machine-learning.png'



const HomesDb = [
  {
    homeId: 1,
    rooms: [
      {
        roomId: 1,
        roomName: "Living Room",
        roomIcon: (
          <ChairOutlinedIcon fontSize="large" style={{ fill: "#0072ea" }} />
        ),
        sensors: [
          {
            sensorId: 1,
            sensorName: "Fan",
            SensorTopic: "home/node1/D1",
            sensorStatus: "ON",
          },
          {
            sensorId: 2,
            sensorName: "Air Conditioner",
            SensorTopic: "home/node1/D2",
            sensorStatus: "OFF",
          },
          {
            sensorId: 3,
            sensorName: "Smart TV",
            SensorTopic: "home/node1/D3",
            sensorStatus: "ON",
          },
          {
            sensorId: 4,
            sensorName: "Door 1",
            SensorTopic: "home/node1/D4",
            sensorStatus: "ON",
          },
          {
            sensorId: 5,
            sensorName: "Door 2",
            SensorTopic: "home/node1/D5",
            sensorStatus: "ON",
          },
          {
            sensorId: 6,
            sensorName: "Router",
            SensorTopic: "home/node1/D6",
            sensorStatus: "OFF",
          },
          {
            sensorId: 7,
            sensorName: "Light bulb",
            SensorTopic: "home/node1/D7",
            sensorStatus: "ON",
          },
          {
            sensorId: 8,
            sensorName: "Window 1",
            SensorTopic: "home/node1/D8",
            sensorStatus: "OFF",
          },
          {
            sensorId: 9,
            sensorName: "Window 2",
            SensorTopic: "home/node1/D9",
            sensorStatus: "ON",
          },
        ],
      },
      {
        roomId: 2,
        roomName: "Bed Room",
        roomIcon: (
          <KingBedOutlinedIcon fontSize="large" style={{ fill: "#0072ea" }} />
        ),
        sensors: [
          {
            sensorId: 1,
            sensorName: "Fan",
            SensorTopic: "home/node2/D1",
            sensorStatus: "OFF",
          },
          {
            sensorId: 2,
            sensorName: "Light",
            SensorTopic: "home/node2/D2",
            sensorStatus: "ON",
          },
          {
            sensorId: 3,
            sensorName: "Air Conditioner",
            SensorTopic: "home/node2/D3",
            sensorStatus: "OFF",
          },
          {
            sensorId: 4,
            sensorName: "Light bulb",
            SensorTopic: "home/node2/D4",
            sensorStatus: "OFF",
          },
        ],
      },
      {
        roomId: 3,
        roomName: "Kitchen",
        roomIcon: (
          <KitchenOutlinedIcon fontSize="large" style={{ fill: "#0072ea" }} />
        ),
        sensors: [
          {
            sensorId: 1,
            sensorName: "Fan",
            SensorTopic: "home/node3/D1",
            sensorStatus: "OFF",
          },
          {
            sensorId: 2,
            sensorName: "Light",
            SensorTopic: "home/node3/D2",
            sensorStatus: "ON",
          },
          {
            sensorId: 3,
            sensorName: "Refrigerator",
            SensorTopic: "home/node3/D3",
            sensorStatus: "OFF",
          },
          {
            sensorId: 4,
            sensorName: "Light bulb",
            SensorTopic: "home/node3/D4",
            sensorStatus: "OFF",
          },
        ],
      },
    ],
  },
];

const techHomeTeamData = [
  {
    id: 1,
    name: "Mahmoud Abdallah",
    about: "Software Engineer | Cloud Team",
    contactInfo:
      "https://www.linkedin.com/in/mahmoud-abdallah-hassan-942227185/",
    avatar: ramadan,
  },
  {
    id: 2,
    name: "Mohamed Sabek",
    about: "Software Engineer | Clould Team",
    contactInfo: "https://www.linkedin.com/in/mohamed-sabek",
    avatar: sabek,
  },
  {
    id: 3,
    name: "Mohamed Nabil",
    about: "Machine Learning Developer | Machine Learning team",
    contactInfo: "https://www.linkedin.com/in/mohamed-nabil-410424203/",
    avatar: nabil,
  },
  {
    id: 4,
    name: "Roqaya Abdullah",
    about: "Software Engineer | Embedded Systems team",
    contactInfo: "https://www.linkedin.com/in/roqaya-abdallah-21a3461b6",
    avatar: Roqia,
  },
  {
    id: 5,
    name: "Mohamed Nour",
    about: "C# and Unity Game developer | Mobile App team",
    contactInfo: "https://www.linkedin.com/in/mohamed-nour-b44955176/",
    avatar: mohamedNour,
  },
  {
    id: 6,
    name: "Eman Eldeeb",
    about: "Software Engineer | Machine Learning team",
    contactInfo: "mailto:emaneldeeb1999@gmail.com",
    avatar: eman,
  },
  {
    id: 7,
    name: "Mahmoud Bebars",
    about: "Software Engineer | Machine Learning team",
    contactInfo: "https://www.linkedin.com/in/mahmoud-abdullah-723606204/",
    avatar: bebars,
  },
  {
    id: 8,
    name: "Salma El-Naggar",
    about: "Software Engineer | Embedded Systems team",
    contactInfo: "https://www.linkedin.com/in/salma-el-naggar",
    avatar: salma,
  },
  {
    id: 9,
    name: "Mahmoud ElAlfy",
    about: "Junior Front-End Developer | Mobile App team",
    contactInfo: "https://www.linkedin.com/in/mahmoud-elalfy-79b894209",
    avatar: alfy,
  },
  {
    id: 10,
    name: "Bassem Hussine",
    about: "Software Engineer | Embedded Systems team",
    contactInfo: "",
    avatar: blank_avatar,
  },
];


const ServicesData =
{
  title: 'Our Services',
  subtitle: 'TecHome is a leading IoT, ML, mobile app and Web development company with extensive experience of working with Android, Web, Graphics design. Our approach is to satisfy our clients. As an innovative and smarter technology partner, We build IoT solutions for your business needs which will keep you ahead in this digital age.',
  service: [
    {
      id: 1,
      name: 'Mobile Development',
      details: 'We provide an innovative, cost efficient and reliable Mobile and Tablet apps development services for Android and Android Tablets.',
      image: mobileDevelopment,
    },
    {
      id: 2,
      name: 'Web Development',
      details: 'Providing an innovative, cost efficient and reliable Web applications development services using trending frameworks.',
      image: webDevelopment,
    },
    {
      id: 3,
      name: 'IoT solutions',
      details: 'We provide an innovative, cost efficient and reliable IoT solutions integrated with cloud services to make control your home in an easy way.',
      image: iotSolutions,
    },
    {
      id: 4,
      name: 'NLP',
      details: 'Creating an innovative and reliable NLP models using latest frameworks, libraries and technologies, integrated with mobile apps.',
      image: nlp,
    },
    {
      id: 5,
      name: 'Face Recognition',
      details: 'Building reliable facial recognition models to secure your home and only provide access to right people in an efficient way.',
      image: facialRecognition,
    },
    {
      id: 6,
      name: 'Machine Learning',
      details: 'Building reliable ML models with most demanding frameworks to easily enhance your mobile or web app experience.',
      image: ml,
    },
  ]
}

export const theme = createTheme({
  palette: {
      button:'#123B73',
      title:'#71bdf9',
  },
  typography: {
    fontFamily: "Cairo",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <Bar />
        <Routes>
          <Route path="/" element={<LandingPage ServicesData={ServicesData} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rooms" element={<Rooms HomesDb={HomesDb} />} />
          <Route path="/weather-app" element={<WeatherApp />} />
          <Route path="/test-api" element={<TestAPI />} />
          <Route path="/about" element={<AboutUs techHomeTeamData={techHomeTeamData} ServicesData={ServicesData} />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
