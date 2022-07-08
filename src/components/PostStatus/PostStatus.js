import { useState, forwardRef } from "react";
import {
    Typography,
    Box,
    Button,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    TextField
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert"
import axios from "axios";
// import { useTheme } from '@mui/material/styles';
// import {InputLabel, Select, MenuItem } from "@mui/material"
// import axios from '../../lib/generalAPI';



const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PostStatus = ({ Topics, getStyles }) => {
    const [topicName, setTopicName] = useState('');
    const [message, setMessage] = useState('ON');
    const [open, setOpen] = useState(false);
    // const [status, setStatus] = useState(true);
    // const theme = useTheme();

    const handleChange = (event) => {
        setTopicName(event.target.value);
    };


    const handleMessageChange = (event) => {
        if (event.target.value === 'ON') {
            setMessage("ON");
        }
        else {
            setMessage("OFF");
        }
    };

    // my aws account api -- IAM user Account
    // const PostData = () => {
    //     const response = axios.post(`${topicName}`,
    //         { status },
    //         {
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 'X-API-KEY': process.env.REACT_APP_GATEWAY_API_KEY_RAMADAN_IAM_USER,
    //             }
    //         })
    //     return response;
    // }

    // Sabek Account
    const PostData = () => {
        const response = axios.post(`https://j55nm7cgfj.execute-api.us-east-2.amazonaws.com/default/LambdaForIoT?topic=${topicName}`,
            { message },
            {
                headers: {
                    'Content-type': 'application/json',
                    'X-API-KEY': process.env.REACT_APP_GATEWAY_API_KEY_SABEK_USER,
                }
            })
        return response;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await PostData()
            setTopicName('')
            setOpen(true);
            setMessage('ON')
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

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
                    variant='h5'
                    sx={{ fontWeight: 600, padding: "0 2px" }}
                >
                    Post status to a specific topic
                </Typography>
                <Typography
                    variant="body2"
                    color='text.secondary'
                    sx={{ fontSize: "14px", padding: "0 2px", mt: "2px" }}
                >
                    Please, choose the topic name carefully.
                </Typography>
            </Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField
                    id="outlined-helperText"
                    label="Topic Name"
                    value={topicName}
                    onChange={handleChange}
                    required
                />
                {/* <InputLabel>Topic Name</InputLabel>
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
                </Select> */}
                <FormLabel id="demo-controlled-radio-buttons-group" sx={{ mt: 2 }}>Status</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={message}
                    onChange={handleMessageChange}
                >
                    <FormControlLabel value='ON' control={<Radio />} label="ON"/>
                    <FormControlLabel value='OFF' control={<Radio />} label="OFF" />
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
                        backgroundColor: '#123B73',
                        color: 'white'
                    }}
                >
                    post Status
                </Button>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                        Done!
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    )
}

export default PostStatus