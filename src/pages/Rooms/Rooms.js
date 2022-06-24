import React, { Fragment } from 'react'
import RoomHolder from '../../components/RoomHolder/RoomHolder'
import SensorCardHolder from '../../components/SensorCardHolder/SensorCardHolder'


const livingRoom_Sensors = [
    { 'sensorId': 1, 'sensorName': "fan", "sensorStatus": "ON" },
    { 'sensorId': 2, 'sensorName': "light", "sensorStatus": "ON" },
    { 'sensorId': 3, 'sensorName': "motor", "sensorStatus": "ON" },
    { 'sensorId': 4, 'sensorName': "door", "sensorStatus": "ON" },
    { 'sensorId': 5, 'sensorName': "door", "sensorStatus": "ON" },
    { 'sensorId': 6, 'sensorName': "door", "sensorStatus": "ON" },
    { 'sensorId': 7, 'sensorName': "door", "sensorStatus": "ON" },
    { 'sensorId': 8, 'sensorName': "door", "sensorStatus": "ON" },
    { 'sensorId': 9, 'sensorName': "door", "sensorStatus": "ON" },
]
const BedRoom_Sensors = [
    { 'sensorId': 1, 'sensorName': "fan", "sensorStatus": "OFF" },
    { 'sensorId': 2, 'sensorName': "light", "sensorStatus": "ON" },
    { 'sensorId': 3, 'sensorName': "motor", "sensorStatus": "OFF" },
    { 'sensorId': 4, 'sensorName': "door", "sensorStatus": "OFF" },]

const Rooms = () => {
    return (
        <Fragment>
            <RoomHolder RoomName={"Living Room"} Sensors={livingRoom_Sensors} />
            <RoomHolder RoomName={"Bed Room"} Sensors={BedRoom_Sensors} />
        </Fragment>
    )
}

export default Rooms