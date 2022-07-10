import { Fragment } from "react"

//import custom components
import AboutUsContent from "../../components/AboutUsContent/AboutUsContent";
import MeetTheTeam from "../../components/MeetTheTeam/MeetTheTeam";
import Services from "../../components/Services/Services";
import ContactUs from "../../components/ContactUs/ContactUs";



const AboutUs = ({ techHomeTeamData, ServicesData }) => {
    return (
        <Fragment>
            <AboutUsContent />
            <MeetTheTeam techHomeTeamData={techHomeTeamData} />
            <Services ServicesData={ServicesData} />
            <ContactUs />
        </Fragment>
    )
}

export default AboutUs