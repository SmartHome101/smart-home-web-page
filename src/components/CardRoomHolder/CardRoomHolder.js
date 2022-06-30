import { useState } from "react";
import { Box, Typography,Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import custom components
import RoomSensorsHolder from "../RoomSensorsHolder/RoomSensorsHolder";

const CardRoomHolder = ({ RoomName, Sensors }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Accordion
                sx={{
                    borderRadius: '20px',
                    bgcolor: '#069cbf',
                    color: '#fff'
                }}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography gutterBottom variant="h6" component="div" sx={{ width: '33%', flexShrink: 0, fontWeight: '600' }}>
                        {RoomName}
                    </Typography>
                    <Typography variant="body1">{Sensors.length}x devices</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RoomSensorsHolder RoomName={RoomName} Sensors={Sensors}/>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default CardRoomHolder