import { Fragment, useState, forwardRef } from "react";
import { Typography, Box, Button, FormControl, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import TopicStatus from "../TopicStatus/TopicStatus";

// import {InputLabel,  Select, MenuItem} from "@mui/material";
// import { useTheme } from '@mui/material/styles';
// import axios from '../../lib/generalAPI';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const GetStatus = ({ Topics, getStyles }) => {
    const [topicName, setTopicName] = useState('');
    const [open, setOpen] = useState(false);


    const [topicData, setTopicData] = useState({
        topic: '',
        payload: { message: null },
        lastModifiedTime: ""
    });
    // const theme = useTheme();
    const handleChange = (event) => {
        setTopicName(event.target.value);
    };

    // my aws account api -- IAM user Account
    // const GetData = () => {
    //     const response = axios.get(`${topicName}`,
    //         {
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 'X-API-KEY': process.env.REACT_APP_GATEWAY_API_KEY_RAMADAN_IAM_USER,
    //             }
    //         })
    //     return response;
    // }

    // Sabek Account
    const GetData = () => {
        const response = axios.get(`https://j55nm7cgfj.execute-api.us-east-2.amazonaws.com/default/LambdaForIoT?topic=${topicName}`,
            {
                headers: {
                    'Content-type': 'application/json',
                    'X-API-KEY': process.env.REACT_APP_GATEWAY_API_KEY_SABEK_USER,
                }
            })
        return response;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await GetData()
            setTopicData(data)
            setOpen(true);
            setTopicName('')
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
        <Fragment>
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
                        Get information about a specific topic
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
                    {/* <InputLabel>Topic Name</InputLabel> */}
                    {/* <Select
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
                        get Status
                    </Button>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                            Done!
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
            <TopicStatus Data={topicData} />
        </Fragment>
    )
}

export default GetStatus