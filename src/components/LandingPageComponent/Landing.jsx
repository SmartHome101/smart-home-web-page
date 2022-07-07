import { Container, Box, Typography } from "@mui/material";
import background from "../../assests/background.png";

const Landing = () => {
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{
        height: "100vh",
        minWidth: '300px',
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        objectFit: 'center'
      }}
    >
      <Container sx={{ fontWeight: "900", mt: "60px" }}>
        <Box sx={{ display: "flex", gap: "28px", letterSpacing: "5px" }}>
          <Typography
            color="title"
            sx={{
              fontSize: {xs: '20px', sm: '40px'},
            }}
          >
            Make
          </Typography>
          <Typography
            color="title"
            sx={{
              fontSize: {xs: '20px', sm: '40px'},
            }}
          >
            Your
          </Typography>
          <Typography
            color="title"
            sx={{
              fontSize: {xs: '20px', sm: '40px'},
            }}
          >
            Home
          </Typography>
        </Box>
        <Typography
          color="title"
          sx={{
            fontSize: {xs: '40px', sm: '80px'},
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
