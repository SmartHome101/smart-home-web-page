import { Box, Container, Typography } from "@mui/material"
import SensorCardHolder from "../SensorCardHolder/SensorCardHolder"
import cover from '../../images/cover2.png'

const RoomHolder = ({ RoomName, Sensors }) => {
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
                    {Sensors.map((sensor) => (<SensorCardHolder key={sensor.sensorId} sensor={sensor} />))}
                </Box>
            </Box>
        </Container>
    )
}

export default RoomHolder