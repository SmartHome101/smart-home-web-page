import { Container, Box, Typography } from "@mui/material";
import background from "../../assests/background.png";

const Landing = () => {
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container sx={{ fontWeight: "900", mt: "60px" }}>
        <Box sx={{ display: "flex", gap: "28px", letterSpacing: "5px" }}>
          <Typography
            color="primary"
            sx={{
              fontSize: "40px",
            }}
          >
            Make
          </Typography>
          <Typography
            color="primary"
            sx={{
              fontSize: "40px",
            }}
          >
            Your
          </Typography>
          <Typography
            color="primary"
            sx={{
              fontSize: "40px",
            }}
          >
            Home
          </Typography>
        </Box>
        <Typography
          color="primary"
          sx={{
            fontSize: "80px",
            textTransform: "uppercase",
            letterSpacing: "30px",
            fontWeight: "bold",
          }}
        >
          Smart
        </Typography>
      </Container>
    </Container>
  );
};

export default Landing;
