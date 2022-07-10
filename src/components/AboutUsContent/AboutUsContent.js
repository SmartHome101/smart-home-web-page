import { Box, Typography } from '@mui/material';
import GP_Team from '../../assets/smartHomeArt.png';
import classes from './AboutUsContent.module.css';

const AboutUsContent = () => {
    return (
        <Box sx={{ backgroundColor: '#f9f9f9' }}>
            <Box sx={{
                display: 'flex',
                gap: {xs: '60px', md: '90px', lg: '200px'},
                p:{xs: 2, md: 8},
                flexDirection: { xs: 'column-reverse', lg: 'row' },
                alignItems: { xs: 'center', lg: 'flex-left' },
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: { xs: 4 }, ml: { xs: 0, lg: 5 }, textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography variant="h3" sx={{ fontWeight: 500, mb: 4 }}>Make your home smart</Typography>
                    <Typography variant='body2' sx={{ mb: 4, maxWidth: '600px' }}>
                        The internet of things, cloud computing and rule-based occasion handling,
                        are the building pieces of our proposed progressed smart home integrated compound.
                        Each component contributes its center qualities and innovations to the proposed composition.
                        IoT contributes to the internet connection and inaccessible administration of versatile appliances,
                        joined with a variety of sensors.
                    </Typography>
                    <Typography variant='body2' sx={{ maxWidth: '600px' }}>
                        Sensors may be joined to home related appliances, such as air-conditioning,
                        lights and other natural gadgets.
                        And so, it implants computer insights into home gadgets
                        to supply ways to degree home conditions and screen home appliances’ usefulness.
                        Cloud computing gives versatile computing control, capacity space and applications,
                        for creating, keeping up, running home administrations, and getting to home gadgets anyplace at any time.
                        The rule-based occasion preparing framework gives the control and organization of
                        the whole progressed shrewd home composition.
                    </Typography>
                </Box>
                <img src={GP_Team} alt='cover' className={classes.media} />
            </Box>
        </Box>
    )
}

export default AboutUsContent