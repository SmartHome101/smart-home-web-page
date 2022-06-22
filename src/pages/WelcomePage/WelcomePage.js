import { Fragment } from "react"
import { useNavigate } from "react-router-dom";

import classes from "./WelcomePage.module.css";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const WelcomePage = () => {

    const navigate = useNavigate();

    const handleOnClickHome = (e) => {
        e.preventDefault();
        navigate("/home");
    }
    const handleOnClickWeather = (e) => {
        e.preventDefault();
        navigate("/about");
    }
    const handleOnClickAbout = (e) => {
        e.preventDefault();
        navigate("/about");
    }
    return (
        <Fragment>
            <div className={classes.sec}>
                <h2>Welcome to Smart Home 101</h2>
                <ul>
                    <li onClick={handleOnClickHome}>
                        <span><HomeIcon /></span>
                        <h3>Your Home</h3>
                        <p>control your home easily from a web application, quickly get access any room in your house, and easily control it.</p>
                    </li>
                    <li onClick={handleOnClickWeather}>
                        <span><AcUnitIcon /></span>
                        <h3>Weather app</h3>
                        <p>you can search on a specific city and you will know the weather there with addition to useful weather information.</p>
                    </li>
                    <li onClick={handleOnClickAbout}>
                        <span><InfoIcon /></span>
                        <h3>About us</h3>
                        <p>Smart Home 101 is a graduation project implemented by a team in Zagazig university class of 2022.</p>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default WelcomePage