import { Fragment } from "react"
import Member from '../../components/Member/Member'
import { Box, Typography } from '@mui/material';
import cover from '../../assests/cover2.png'
import classes from './About.module.css';


const About = () => {
    return (
        <Fragment>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: {xs: 'space-between', lg: 'space-evenly'},
                alignItems: {xs: 'center', lg: 'flex-left'},
                m: 7, 
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: { xs: 4 } }}>
                    <Typography variant="h4" sx={{fontWeight: 'bold'}}>Make your home smart lol</Typography>
                    <Typography variant='body2'>let's just say that it became easier to control your home bla bla bal </Typography>
                </Box>
                <img src={cover} alt='cover' className={classes.media} />
            </Box>
            <Box>
                <Typography variant='h4'
                    sx={{
                        pl: { xs: 0, md: 4 },
                        pt: 2,
                        fontWeight: 'bold',
                        textAlign: { xs: 'center', md: 'left' }
                    }}>Meet the team</Typography>
                <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', mb: 4 }}>
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                </Box>
            </Box>
        </Fragment>
    )
}

export default About