import { Fragment } from "react";
import { Container } from "@mui/material";
import PostStatus from "../../components/PostStatus/PostStatus";
import GetStatus from "../../components/GetStatus/GetStatus";

const topics = [
    'home/node1/D1',
    'home/node1/D2',
    'home/node1/D6',
    'livingRoomLight',
    'livingRoomWindow',
    'livingRoomFan',
    'livingRoomHeater',
    'receptionLight',
    'bathroomLight',
    'bedroomCurtain',
    'bedroomFan',
    'kitchenLight'
];

const getStyles = (name, topicName, theme) => {
    return {
        fontWeight:
            topicName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const Home = () => {
    return (
        <Fragment>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
                <GetStatus Topics={topics} getStyles={getStyles} />
                <PostStatus Topics={topics} getStyles={getStyles} />
            </Container>
        </Fragment>
    )
}

export default Home