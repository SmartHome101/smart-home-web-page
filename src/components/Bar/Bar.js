import * as React from 'react';
import { Fragment } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";




const Bar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    const pages = [
        {
            name: "Home",
            handleOnClick: () => {
                setAnchorElNav(null);
                navigate("/home");
            },
        },
        {
            name: "Rooms",
            handleOnClick: () => {
                setAnchorElNav(null);
                navigate("/rooms");
            },
        },
        {
            name: "Weather App",
            handleOnClick: () => {
                setAnchorElNav(null);
                navigate("/weather-app");
            },
        },
        {
            name: "Test API",
            handleOnClick: () => {
                setAnchorElNav(null);
                navigate("/test-api");
            },
        },
        {
            name: "About us",
            handleOnClick: () => {
                setAnchorElNav(null);
                navigate("/about");
            }
        }];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOnClickTitle =()=>{
        navigate("/");
    }

    return (
        <Fragment>
        <AppBar position="fixed" sx={{backgroundColor: '#123B73', boxShadow: 'none'}}>
        <Toolbar>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, color:'white', mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={handleOnClickTitle}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        TecHome
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{color: '#fff'}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={page.handleOnClick}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, color: 'white', mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        onClick={handleOnClickTitle}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        TecHome
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={page.handleOnClick}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </Toolbar>
        </AppBar>
        <Toolbar/>
        </Fragment>
        
    );
};
export default Bar;
