import React, { useState } from 'react'
import { Button, createTheme, Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { TextField } from '@mui/material';
import WeatherAPI from "../../components/weatherAPI/weatherAPI";
import classes from "./WeatherApp.module.css"

const WeatherApp = () => {
    const [cityValue, setCityValue] = useState(null);
    const [city, setCity] = React.useState(null);

    const handleOnChange=(e)=>{
        setCityValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setCity(cityValue);
    }
    return (
        <Grid className={classes.root} alignItems="center" container justify>
            <Card className={classes.cardcss}>
                <CardContent
                    component="form"
                    onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        label="City Name"
                        value={cityValue}
                        onChange={handleOnChange}
                    />
                    <Button onClick={(e) => {
                        setCity(e.target.value)
                    }}>search</Button>
                    <WeatherAPI city={city} />
                </CardContent>
            </Card>
        </Grid>
    )
}

export default WeatherApp