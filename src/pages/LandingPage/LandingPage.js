import { Fragment } from "react"
import Header2 from "../../components/LandingPageComponent/Header2";
import Landing from "../../components/LandingPageComponent/Landing";

import Services from '../../components/Services/Services'
import ContactUs from "../../components/ContactUs/ContactUs";

const LandingPage = ({ ServicesData }) => {
    return (
        <Fragment>
            {/* <Header2 /> */}
            <Landing />
            <Services ServicesData={ServicesData} />
            <ContactUs />
        </Fragment>
    )
}

export default LandingPage