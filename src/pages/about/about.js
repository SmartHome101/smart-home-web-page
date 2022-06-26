import { Fragment } from "react"
import Member from '../../components/Member/Member'
import { Box, Typography } from '@mui/material';
import GP_Team from '../../assests/smartHomeArt.png';
import classes from './About.module.css';
import Ramadan from '../../assests/SmartHomeTeam/Ramadan.jpg';
import Nabil from '../../assests/SmartHomeTeam/Nabil.jpg';
import Sabek from '../../assests/SmartHomeTeam/Sabek.jpg';


const smartHomeTeamData = [
    {
        id: 1,
        name: 'Mahmoud Abdallah',
        about: 'Failure sucks but it instructs',
        contactInfo: "https://www.linkedin.com/in/mahmoud-abdallah-hassan-942227185/",
        avatar: Ramadan,
    },
    {
        id: 2,
        name: 'Mohamed Sabek',
        about: 'What is thinkable is also possible.',
        contactInfo: "https://www.linkedin.com/in/mohamed-sabek",
        avatar: Sabek,
    },
    {
        id: 3,
        name: 'Mohamed Nabil',
        about: 'Junior Machine Learning Developer',
        contactInfo: "https://www.linkedin.com/in/mohamed-nabil-410424203/",
        avatar: Nabil,
    },

]

const About = () => {
    return (
        <Fragment>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: { xs: 'space-between', lg: 'space-between' },
                alignItems: { xs: 'center', lg: 'flex-left' },
                m: 7,
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: { xs: 4 } }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>Make your home smart</Typography>
                    <Typography variant='body2' sx={{ mb: 4 }}>The internet of things, cloud computing and rule-based occasion handling,
                        are the building pieces of our proposed progressed smart home integrated compound. Each component
                        contributes its center qualities and innovations to the proposed composition.
                        IoT contributes to the internet connection and inaccessible administration of versatile appliances, joined with a variety of sensors. </Typography>
                    <Typography variant='body2'>Sensors may be joined to home related appliances, such as air-conditioning,
                        lights and other natural gadgets. And so, it implants computer insights into home gadgets
                        to supply ways to degree home conditions and screen home appliances’
                        usefulness. Cloud computing gives versatile computing control, capacity space and applications,
                        for creating, keeping up, running home administrations, and getting to home gadgets anyplace at any time.
                        The rule-based occasion preparing framework gives the control and organization of
                        the whole progressed shrewd home composition.</Typography>
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
                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', mb: 4 }}>
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