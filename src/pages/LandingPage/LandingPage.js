import { Fragment } from "react"
import Header2 from "../../components/LandingPageComponent/Header2";
import Landing from "../../components/LandingPageComponent/Landing";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../components/LandingPageComponent/Theme";

const LandingPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Header2 />
                <Landing />
            </Fragment>
        </ThemeProvider>
    )
}

export default LandingPage