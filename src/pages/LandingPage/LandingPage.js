import { Fragment } from "react"

// import custom component
import Landing from "../../components/LandingPageComponent/Landing";
import Services from '../../components/Services/Services'
import ContactUs from "../../components/ContactUs/ContactUs";

const LandingPage = ({ ServicesData }) => {
    return (
        <Fragment>
            <Landing />
            <Services ServicesData={ServicesData} />
            <ContactUs />
        </Fragment>
    )
}

export default LandingPage