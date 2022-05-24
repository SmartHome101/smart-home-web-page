import { useState } from "react";
import { Typography, Box, Button, InputLabel, FormControl, Select, MenuItem, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import axios from "axios";


const PostStatus = ({ Topics, getStyles }) => {
    const [topicName, setTopicName] = useState('');
    const [status, setStatus] = useState(true);
    const theme = useTheme();

    const handleChange = (event) => {
        setTopicName(event.target.value);
    };
    const handleStatusChange = (event) => {
        if (event.target.value === 'true') {
            setStatus(true);
        }
        else {
            setStatus(false);
        }
    };

    // my aws account api -- IAM user Account
    // const PostData = () => {
    //     const response = axios.post(`https://u81oc46ubj.execute-api.us-east-2.amazonaws.com/default/accessIoTtopicUsingAPI?topic=${topicName}`,
    //         { status },
    //         {
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 'X-API-KEY': 'ub0ngFgXo13NasQw9iNca1fCysQUTuDa6zOL6GrN',
    //             }
    //         })
    //     return response;
    // }

    // Sabek Account
    const PostData = () => {
        const response = axios.post(`https://j55nm7cgfj.execute-api.us-east-2.amazonaws.com/default/LambdaForIoT?topic=${topicName}`,
            { status },
            {
                headers: {
                    'Content-type': 'application/json',
                    'X-API-KEY': 'rb21EUMVreCe1p3CITM54SSpxhmZMA721WlfGiV4',
                }
            })
        return response;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (topicName.length !== 0) {
            try {
                await PostData()
            }
            catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "auto",
                boxShadow: 3,
                borderRadius: 2,
                p: "16px",
                mb: 5,
                mt: 5,
            }}
        >
            <Box sx={{ width: "100%", mb: "2px" }}>
                <Typography
                    sx={{ fontSize: "18px", fontWeight: "600", padding: "0 2px" }}
                >
                    Post status to a specific topic
                </Typography>
                <Typography
                    sx={{ fontSize: "14px", padding: "0 2px", mt: "2px" }}
                >
                    choose a topic from list below.
                </Typography>
            </Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Topic Name</InputLabel>
                <Select
                    value={topicName}
                    label="Topic Name"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {Topics.map((topic) => (
                        <MenuItem
                            key={topic}
                            value={topic}
                            style={getStyles(topic, topicName, theme)}
                        >
                            {topic}
                        </MenuItem>
                    ))}
                </Select>
                <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={status}
                    onChange={handleStatusChange}
                >
                    <FormControlLabel value='true' control={<Radio />} label="True" />
                    <FormControlLabel value='false' control={<Radio />} label="False" />
                </RadioGroup>
            </FormControl>
            <Box sx={{ mt: 2, mb: 3 }}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        maxHeight: 45,
                        alignSelf: "flex-start",
                        fontSize: "14px",
                    }}
                >
                    post Status
                </Button>
            </Box>
        </Box>
    )
}

export default PostStatus