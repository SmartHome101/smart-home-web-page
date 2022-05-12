import { Box } from "@mui/material";

const TopicStatus = () => {
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
            <div>Topic Status</div>
        </Box>
    )
}

export default TopicStatus