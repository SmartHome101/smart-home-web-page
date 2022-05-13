import { Box, Typography } from "@mui/material";

const TopicStatus = ({ Data }) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: "auto",
                boxShadow: 3,
                borderRadius: 2,
                p: "16px",
            }}
        >
            <Typography
                sx={{ fontSize: "22px", fontWeight: "600", padding: "0 2px" }}
            >Topic Status</Typography>
            <div>Topic Name: {Data.topic}</div>
            <div>Topic State: {Data.payload.status !== null && <span>{Data.payload.status.toString()}</span>}</div>

            <div>Last modified time: {Data.lastModifiedTime}</div>
        </Box>
    )
}

export default TopicStatus