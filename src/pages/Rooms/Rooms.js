import React, { Fragment } from 'react'
import RoomHolder from '../../components/RoomHolder/RoomHolder'
import SensorCardHolder from '../../components/SensorCardHolder/SensorCardHolder'


const livingRoom_Sensors = [
    { 'sensorId': 1, 'sensorName': "fan", 'SensorTopic': 'home/node1/D1', "sensorStatus": "ON" },
    { 'sensorId': 2, 'sensorName': "light", 'SensorTopic': 'home/node1/D2', "sensorStatus": "ON" },
    { 'sensorId': 3, 'sensorName': "motor", 'SensorTopic': 'home/node1/D3', "sensorStatus": "ON" },
    { 'sensorId': 4, 'sensorName': "door", 'SensorTopic': 'home/node1/D4', "sensorStatus": "ON" },
    { 'sensorId': 5, 'sensorName': "door", 'SensorTopic': 'home/node1/D5', "sensorStatus": "ON" },
    { 'sensorId': 6, 'sensorName': "door", 'SensorTopic': 'home/node1/D6', "sensorStatus": "OFF" },
    { 'sensorId': 7, 'sensorName': "door", 'SensorTopic': 'home/node1/D7', "sensorStatus": "ON" },
    { 'sensorId': 8, 'sensorName': "door", 'SensorTopic': 'home/node1/D8', "sensorStatus": "OFF" },
    { 'sensorId': 9, 'sensorName': "door", 'SensorTopic': 'home/node1/D9', "sensorStatus": "ON" },
]
const BedRoom_Sensors = [
    { 'sensorId': 1, 'sensorName': "fan", 'SensorTopic': 'home/node2/D1', "sensorStatus": "OFF" },
    { 'sensorId': 2, 'sensorName': "light", 'SensorTopic': 'home/node2/D1', "sensorStatus": "ON" },
    { 'sensorId': 3, 'sensorName': "motor", 'SensorTopic': 'home/node2/D1', "sensorStatus": "OFF" },
    { 'sensorId': 4, 'sensorName': "door", 'SensorTopic': 'home/node2/D1', "sensorStatus": "OFF" },]

const Rooms = () => {
    return (
        <Fragment>
            <RoomHolder RoomName={"Living Room"} Sensors={livingRoom_Sensors} />
            <RoomHolder RoomName={"Bed Room"} Sensors={BedRoom_Sensors} />
        </Fragment>
    )
}

export default Rooms