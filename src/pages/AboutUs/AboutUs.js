import { Fragment } from "react"
import { Box, Typography } from '@mui/material';

//import custom components
import AboutUsContent from "../../components/AboutUsContent/AboutUsContent";
import Member from '../../components/Member/Member'
import ContactUs from "../../components/ContactUs/ContactUs";
import Services from "../../components/Services/Services";


const AboutUs = ({ techHomeTeamData, ServicesData }) => {
    return (
        <Fragment>
            <AboutUsContent />
            <Box>
                <Typography variant='h4'
                    sx={{
                        pl: { xs: 0, md: 4 },
                        pt: 2,
                        fontWeight: 'bold',
                        textAlign: { xs: 'center', md: 'left' }
                    }}>Meet the team</Typography>
                <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', mb: 3, mt: 2 }}>
                    {techHomeTeamData.map((teamMember) => (
                        <Member
                            key={teamMember.id}
                            Name={teamMember.name}
                            About={teamMember.about}
                            Avatar={teamMember.avatar}
                            ContactInfo={teamMember.contactInfo} />
                    ))}
                </Box>
            </Box>
            <Services ServicesData={ServicesData}/>
            <ContactUs/>
        </Fragment>
    )
}

export default AboutUs