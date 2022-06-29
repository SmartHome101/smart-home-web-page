import { Box, Container, Typography } from "@mui/material";

import CardRoomHolder from "../../components/CardRoomHolder/CardRoomHolder";
import RoomSensorsHolder from '../../components/RoomSensorsHolder/RoomSensorsHolder'


const HomesDb = [
    {
        homeId: 1,
        rooms: [
            {
                roomId: 1,
                roomName: 'Living Room',
                sensors:
                    [
                        { 'sensorId': 1, 'sensorName': "Fan", 'SensorTopic': 'home/node1/D1', "sensorStatus": "ON" },
                        { 'sensorId': 2, 'sensorName': "Air Conditioner", 'SensorTopic': 'home/node1/D2', "sensorStatus": "OFF" },
                        { 'sensorId': 3, 'sensorName': "Smart TV", 'SensorTopic': 'home/node1/D3', "sensorStatus": "ON" },
                        { 'sensorId': 4, 'sensorName': "Door 1", 'SensorTopic': 'home/node1/D4', "sensorStatus": "ON" },
                        { 'sensorId': 5, 'sensorName': "Door 2", 'SensorTopic': 'home/node1/D5', "sensorStatus": "ON" },
                        { 'sensorId': 6, 'sensorName': "Router", 'SensorTopic': 'home/node1/D6', "sensorStatus": "OFF" },
                        { 'sensorId': 7, 'sensorName': "Light bulb", 'SensorTopic': 'home/node1/D7', "sensorStatus": "ON" },
                        { 'sensorId': 8, 'sensorName': "Window 1", 'SensorTopic': 'home/node1/D8', "sensorStatus": "OFF" },
                        { 'sensorId': 9, 'sensorName': "Window 2", 'SensorTopic': 'home/node1/D9', "sensorStatus": "ON" },
                    ]
            },
            {
                roomId: 2,
                roomName: 'Bed Room',
                sensors:
                    [
                        { 'sensorId': 1, 'sensorName': "Fan", 'SensorTopic': 'home/node2/D1', "sensorStatus": "OFF" },
                        { 'sensorId': 2, 'sensorName': "Light", 'SensorTopic': 'home/node2/D2', "sensorStatus": "ON" },
                        { 'sensorId': 3, 'sensorName': "Air Conditioner", 'SensorTopic': 'home/node2/D3', "sensorStatus": "OFF" },
                        { 'sensorId': 4, 'sensorName': "Light bulb", 'SensorTopic': 'home/node2/D4', "sensorStatus": "OFF" },
                    ]
            }
        ]
    }
]






const livingRoom_Sensors = [
    { 'sensorId': 1, 'sensorName': "Fan", 'SensorTopic': 'home/node1/D1', "sensorStatus": "ON" },
    { 'sensorId': 2, 'sensorName': "Air Conditioner", 'SensorTopic': 'home/node1/D2', "sensorStatus": "OFF" },
    { 'sensorId': 3, 'sensorName': "Smart TV", 'SensorTopic': 'home/node1/D3', "sensorStatus": "ON" },
    { 'sensorId': 4, 'sensorName': "Door 1", 'SensorTopic': 'home/node1/D4', "sensorStatus": "ON" },
    { 'sensorId': 5, 'sensorName': "Door 2", 'SensorTopic': 'home/node1/D5', "sensorStatus": "ON" },
    { 'sensorId': 6, 'sensorName': "Router", 'SensorTopic': 'home/node1/D6', "sensorStatus": "OFF" },
    { 'sensorId': 7, 'sensorName': "Light bulb", 'SensorTopic': 'home/node1/D7', "sensorStatus": "ON" },
    { 'sensorId': 8, 'sensorName': "Window 1", 'SensorTopic': 'home/node1/D8', "sensorStatus": "OFF" },
    { 'sensorId': 9, 'sensorName': "Window 2", 'SensorTopic': 'home/node1/D9', "sensorStatus": "ON" },

]
const BedRoom_Sensors = [
    { 'sensorId': 1, 'sensorName': "Fan", 'SensorTopic': 'home/node2/D1', "sensorStatus": "OFF" },
    { 'sensorId': 2, 'sensorName': "Light", 'SensorTopic': 'home/node2/D2', "sensorStatus": "ON" },
    { 'sensorId': 3, 'sensorName': "Air Conditioner", 'SensorTopic': 'home/node2/D3', "sensorStatus": "OFF" },
    { 'sensorId': 4, 'sensorName': "Light bulb", 'SensorTopic': 'home/node2/D4', "sensorStatus": "OFF" },
]


const Rooms = () => {

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    color: '#fff',
                    mb: 5,
                    mt: 5,
                }}
            >
                <Box sx={{
                    bgcolor: 'primary.main',
                    mb: 2,
                    p: "16px",
                    boxShadow: 3,
                    borderRadius: '20px 20px 0px 0px ',
                }}>
                    <Typography variant='h5' sx={{ fontWeight: '600' }}>Rooms</Typography>
                </Box>

                {
                    HomesDb[0].rooms.map((room) => (
                        <CardRoomHolder
                            key={room.roomId}
                            RoomName={room.roomName}
                            Sensors={room.sensors}
                        />
                    ))
                }

            </Box>
            {/* <RoomSensorsHolder RoomName={"Living Room"} Sensors={livingRoom_Sensors} />
                <RoomSensorsHolder RoomName={"Bed Room"} Sensors={BedRoom_Sensors} /> */}
        </Container>
    )
}

export default Rooms