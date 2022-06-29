import { Fragment } from "react"
import Member from '../../components/Member/Member'
import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/system';
import GP_Team from '../../assests/smartHomeArt.png';
import classes from './About.module.css';
import ramadan from '../../assests/smartHomeTeam/ramadan.jpg';
import nabil from '../../assests/smartHomeTeam/nabil.jpg';
import sabek from '../../assests/smartHomeTeam/sabek.jpg';
import mohamedNour from '../../assests/smartHomeTeam/mohamedNour.jpg';
import eman from '../../assests/smartHomeTeam/eman.jpeg';
import bebars from '../../assests/smartHomeTeam/bebars.jpg';
import alfy from '../../assests/smartHomeTeam/alfy.JPG';
import blank_avatar from '../../assests/smartHomeTeam/blank_avatar.png';


const smartHomeTeamData = [
    {
        id: 1,
        name: 'Mahmoud Abdallah',
        about: 'Software Engineer | Cloud Team',
        contactInfo: "https://www.linkedin.com/in/mahmoud-abdallah-hassan-942227185/",
        avatar: ramadan,
    },
    {
        id: 2,
        name: 'Mohamed Sabek',
        about: 'Software Engineer | Clould Team',
        contactInfo: "https://www.linkedin.com/in/mohamed-sabek",
        avatar: sabek,
    },
    {
        id: 3,
        name: 'Mohamed Nabil',
        about: 'Machine Learning Developer | Machine Learning team',
        contactInfo: "https://www.linkedin.com/in/mohamed-nabil-410424203/",
        avatar: nabil,
    },
    {
        id: 4,
        name: 'Roqaya Abdullah',
        about: 'Software Engineer | Embedded Systems team',
        contactInfo: 'https://www.linkedin.com/in/roqaya-abdallah-21a3461b6',
        avatar: blank_avatar,
    },
    {
        id: 5,
        name: 'Mohamed Nour',
        about: 'C# and Unity Game developer. | Mobile Application team',
        contactInfo: 'https://www.linkedin.com/in/mohamed-nour-b44955176/',
        avatar: mohamedNour,
    },
    {
        id: 6,
        name: 'Eman Eldeep',
        about: 'Software Engineer | Machine Learning team',
        contactInfo: 'mailto:emaneldeeb1999@gmail.com',
        avatar: eman,
    },
    {
        id: 7,
        name: 'Mahmoud Bebars',
        about: 'Software Engineer | AI Enthusiast\n Machine Learning team',
        contactInfo: 'https://www.linkedin.com/in/mahmoud-abdullah-723606204/',
        avatar: bebars,
    },
    {
        id: 8,
        name: 'Salma Elnagar',
        about: 'Software Engineer | Embedded Systems team',
        contactInfo: '',
        avatar: blank_avatar,
    },
    {
        id: 9,
        name: 'Mahmoud ElAlfy',
        about: 'Junior Front-End Developer | Mobile App team',
        contactInfo: 'https://www.linkedin.com/in/mahmoud-elalfy-79b894209',
        avatar: alfy,
    },
    {
        id: 10,
        name: 'Bassem Hussine',
        about: 'Software Engineer | Embedded Systems team',
        contactInfo: '',
        avatar: blank_avatar,
    },
    

]

const About = () => {
    return (
        <Fragment>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', lg: 'row' },
                justifyContent: { xs: 'space-between', lg: 'space-between' },
                alignItems: { xs: 'center', lg: 'flex-left' },
                m: {xs: 4, lg: '45px 220px 70px 140px'},
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: { xs: 4 }, ml: {xs: 0, lg: 5 }, textAlign: {xs: 'center', sm: 'left    '} }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>Make your home smart</Typography>
                    <Typography variant='body2' sx={{ mb: 4, maxWidth: '600px' }}>
                        The internet of things, cloud computing and rule-based occasion handling,
                        are the building pieces of our proposed progressed smart home integrated compound.
                        Each component contributes its center qualities and innovations to the proposed composition.
                        IoT contributes to the internet connection and inaccessible administration of versatile appliances,
                        joined with a variety of sensors.
                    </Typography>
                    <Typography variant='body2'  sx={{maxWidth: '600px' }}>
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

            <Box>
                <Typography variant='h4'
                    sx={{
                        pl: { xs: 0, md: 4 },
                        pt: 2,
                        fontWeight: 'bold',
                        textAlign: { xs: 'center', md: 'left' }
                    }}>Meet the team</Typography>
                <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', mb: 7, mt: 2 }}>
                    {smartHomeTeamData.map((teamMember) => (
                        <Member
                            key={teamMember.id}
                            Name={teamMember.name}
                            About={teamMember.about}
                            Avatar={teamMember.avatar}
                            ContactInfo={teamMember.contactInfo} />
                    ))}
                </Box>
            </Box>
        </Fragment>
    )
}

export default About