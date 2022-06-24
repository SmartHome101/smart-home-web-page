import React from 'react'
import { LinearProgress } from '@mui/material';
import Display from '../../components/weatherReportDisplay/weatherReportDisplay';
const API_KEY = "acd4c672ef3521374119e83b44cb562e";
const UNITS = "Metric";
const LANG = "en";

class WeatherAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherReport: null,
            isLoading: true,
            error: null
        }
    }
    componentDidUpdate() {
        var URL = "http://api.openweathermap.org/data/2.5/weather?q=" + this.props.city
            + "&lang=" + LANG + "&appid=" + API_KEY + "&units=" + UNITS
        fetch(URL).then(response => {
            if (response.ok) { return response.json() }
            else { throw new Error("SOMETHING WENT WRONG") }
        })
            .then(data => this.setState(
                {
                    weatherReport: data,
                    isLoading: false
                }))
            .catch(error => this.setState({ error, isLoading: true }));
    }
    render() {
        if (this.state.isLoading) {
            if (this.props.city != null) {
                return (
                    <div>
                        <LinearProgress />
                    </div>
                )
            }
            else return null;
        }
        else {
            return (
                <Display weatherReport={this.state.weatherReport} />
            )
        }
    }
}

export default WeatherAPI;