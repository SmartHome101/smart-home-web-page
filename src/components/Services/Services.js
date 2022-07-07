import { Fragment } from "react"
import { Box, Container, Typography } from "@mui/material"

const Services = ({ServicesData}) => {
    return (
        <Fragment>
            <Box sx={{ backgroundColor: '#f9f9f9' }}>
                <Container>
                    <Typography variant="h4" align="center" sx={{ pt: 4, mb: 2 }}>{ServicesData.title}</Typography>
                    <Typography variant="body2" align="center" sx={{ mb: 6 }}>{ServicesData.subtitle}</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, mb: 2, justifyContent: 'center' }}>
                        {ServicesData.service.map((service) => (
                            <Box key={service.id} sx={{ width: 340, p: "0px 20px", mb: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                                <Box component='div' sx={{ textAlign: 'center' }}>
                                    <img src={service.image} alt="smartphone icons" width="64" height="64" />
                                </Box>
                                <Typography variant="h6" fontWeight='bold'>{service.name}</Typography>
                                <Typography variant="body2" color='text.secondary'>{service.details}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}

export default Services