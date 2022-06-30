import { Box, Container, Typography } from "@mui/material";
//import custom components
import CardRoomHolder from "../../components/CardRoomHolder/CardRoomHolder";

const Rooms = ({ HomesDb }) => {
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
                {HomesDb.map((home) => (
                    <div key={home.homeId}>
                        {home.rooms.map((room) => (
                            <CardRoomHolder
                                key={room.roomId}
                                RoomName={room.roomName}
                                Sensors={room.sensors}
                            />
                        ))}
                    </div>
                ))}
            </Box>
        </Container>
    )
}

export default Rooms