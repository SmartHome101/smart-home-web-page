import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";

const CardRoomHolder = ({ RoomName, Sensors}) => {
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        e.preventDefault();
        navigate('/')
    }
    return (
        <Box sx={{ mb: 2 }} component='form' onClick={handleOnClick}>
            <Card sx={{
                borderRadius: '20px',
                bgcolor: '#069cbf',
                color: '#fff'
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: '600' }}>
                        {RoomName}
                    </Typography>
                    <Typography variant="body1">
                        3x devices
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CardRoomHolder