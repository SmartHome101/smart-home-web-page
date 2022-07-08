import { Fragment } from "react"
import { Box, Container, Typography } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//import custom components
import AboutUsContent from "../../components/AboutUsContent/AboutUsContent";
import Member from '../../components/Member/Member'
import ContactUs from "../../components/ContactUs/ContactUs";
import Services from "../../components/Services/Services";
import classes from './carousel.module.css'



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 500 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 520, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const AboutUs = ({ techHomeTeamData, ServicesData }) => {
    return (
        <Fragment>
            <AboutUsContent />
            <Box sx={{mb: 2}}>
                <Typography
                    variant='h4'
                    sx={{
                        pl: { xs: 0, md: 4 },
                        pt: 2,
                        textAlign: 'center'
                    }}>Meet the team</Typography>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    removeArrowOnDeviceType={["mobile"]}
                    showDots={true}
                    className={classes.skillSlider}
                >
                    {techHomeTeamData.map((teamMember) => (
                        <Member
                            key={teamMember.id}
                            Name={teamMember.name}
                            About={teamMember.about}
                            Avatar={teamMember.avatar}
                            ContactInfo={teamMember.contactInfo} />
                    ))}
                </Carousel>
            </Box>
            <Services ServicesData={ServicesData} />
            <ContactUs />
        </Fragment>
    )
}

export default AboutUs