import { Container, Box, Typography, Link } from "@mui/material";
import background from "../assests/background.png";
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
      <Container sx={{ color: "#71bdf9", fontWeight: "900", mt: "60px" }}>
        <Box sx={{ display: "flex", gap: "51px" }}>
          <Typography
            sx={{
              fontSize: "40px",
            }}
          >
            Make
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
            }}
          >
            Your
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
            }}
          >
            Home
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "80px",
            textTransform: "uppercase",
            letterSpacing: "30px",
          }}
        >
          Smart
        </Typography>
      </Container>
    </Container>
  );
};

export default Landing;
