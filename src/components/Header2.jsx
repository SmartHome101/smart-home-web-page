import { Container, Box, Typography, Link } from "@mui/material";
import logo from "../assests/logo.png";
const Header2 = () => {
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{ width: "100%", position: "fixed", top: "0", left: "0" }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" width="200px" />
          <Box
            sx={{
              display: "flex",
              marginLeft: "60px",
              gap: "40px",
              color: "#6EBFFF",
              padding: "50px 0px",
            }}
          >
            <Typography>Products</Typography>
            <Typography>Servies</Typography>
            <Typography>Aboust Us</Typography>
          </Box>
        </Box>
        <Link
          href="#"
          underline="none"
          sx={{
            color: "white",
            border: "1px solid #246aff",
            borderRadius: "5px",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "#246aff",
            },
          }}
        >
          Login
        </Link>
      </Container>
    </Container>
  );
};

export default Header2;
