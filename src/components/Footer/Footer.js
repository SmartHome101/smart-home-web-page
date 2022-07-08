import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from '@mui/material/Container';
import Copyright from './Copyright';
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();
    const footers = [
        {
            title: "Company",
            description: [
                {
                    name: "Team",
                    handleOnClick: () => {
                        navigate("/home");
                    },
                },
                {
                    name: "History",
                    handleOnClick: () => {
                        navigate("/home");
                    },
                },
                {
                    name: "About us",
                    handleOnClick: () => {
                        navigate("/About us");
                    },
                },
            ],
        },
        {
            title: "Serviecs",
            description: [
                {
                    name: "Mobile Development",
                    handleOnClick: () => {
                        navigate("/home");
                    },
                },
                {
                    name: "Web Development",
                    handleOnClick: () => {
                        navigate("/home");
                    },
                },
                {
                    name: "IoT solutions",
                    handleOnClick: () => {
                        navigate("/home");
                    },
                },
                {
                    name: "AI solutions",
                    handleOnClick: () => {
                        navigate("/home");
                    },
                },
            ],
        },
        {
            title: "Legal",
            description: [
                {
                    name: "Privacy policy",
                    handleOnClick: () => {
                        navigate("/home");
                    },
                },
                {
                    name: "Terms of use",
                    handleOnClick: () => {
                        navigate("/home");
                    },
                },
            ],
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '70vh',
                backgroundColor: "button"
            }}
        >
            <Box
                component="footer"
                sx={{
                    mt: 'auto',
                    color: '#fff'
                }}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        borderTop: (theme) => `1px solid #fff`,
                        mt: 8,
                        py: [3, 6],
                    }}
                >
                    <Grid container spacing={4} justifyContent="space-evenly">
                        {footers.map((footer) => (
                            <Grid item xs={6} sm={3} key={footer.title}>
                                <Typography variant="h6" color="#fff" gutterBottom>
                                    {footer.title}
                                </Typography>
                                <ul>
                                    {footer.description.map((item) => (
                                        <li key={item.name}>
                                            <Link href="#" variant="subtitle1" color="#fff">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        ))}
                    </Grid>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
};
export default Footer;