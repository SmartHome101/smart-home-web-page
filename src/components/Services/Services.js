import { Fragment } from "react"
import { Box, Container, Typography } from "@mui/material"
import mobileDevelopment from '../../assests/app-development.png'

const ServicesData =
{
    title: 'Our Services',
    subtitle: 'TecHome is a leading IoT, ML, mobile app and Web development company with extensive experience of working with Android, iOS, Web, Graphics design, NFC, RFID and Bluetooth (Classic or BLE) based applications that communicate over hardware devices. Our approach is to satisfy our clients. As an innovative and smarter technology partner, We build IoT solutions for your business needs which will keep you ahead in this digital age.',
    service: [
        {
            id: 1,
            name: 'Mobile Development',
            details: 'We provide an innovative, cost efficient and reliable Mobile and Tablet apps development services for Android and Android Tablets.',
            image: mobileDevelopment,
        },
        {
            id: 2,
            name: 'Mobile Development',
            details: 'We provide an innovative, cost efficient and reliable Mobile and Tablet apps development services for Android and Android Tablets.',
            image: mobileDevelopment,
        },
        {
            id: 3,
            name: 'Mobile Development',
            details: 'We provide an innovative, cost efficient and reliable Mobile and Tablet apps development services for Android and Android Tablets.',
            image: mobileDevelopment,
        },
        {
            id: 4,
            name: 'Mobile Development',
            details: 'We provide an innovative, cost efficient and reliable Mobile and Tablet apps development services for Android and Android Tablets.',
            image: mobileDevelopment,
        },
        {
            id: 5,
            name: 'Mobile Development',
            details: 'We provide an innovative, cost efficient and reliable Mobile and Tablet apps development services for Android and Android Tablets.',
            image: mobileDevelopment,
        },
        {
            id: 6,
            name: 'Mobile Development',
            details: 'We provide an innovative, cost efficient and reliable Mobile and Tablet apps development services for Android and Android Tablets.',
            image: mobileDevelopment,
        },
    ]
}


const Services = () => {
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