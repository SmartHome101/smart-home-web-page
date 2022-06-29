import { Box, Container, Typography } from "@mui/material"
import CardSensorHolder from "../CardSensorHolder/CardSensorHolder"

const RoomSensorsHolder = ({ RoomName, Sensors }) => {
    return (
        <Container>
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    color: '#fff',
                    width: "auto",
                    boxShadow: '6px 7px #546bbf',
                    borderRadius: '20px',
                    p: "16px",
                    mb: 5,
                    mt: 5,
                }}
            >
                <Typography variant="h5" sx={{ mb: 2, mr: 2, fontWeight: 'bold' }}>{RoomName}</Typography>
                <Box sx={{
                    display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, flexWrap: 'wrap'
                }}>
                    {Sensors.map((sensor) => (<CardSensorHolder key={sensor.sensorId} sensor={sensor} />))}
                </Box>
            </Box>
        </Container>
    )
}

export default RoomSensorsHolder