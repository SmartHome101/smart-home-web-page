import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_END_POINT_SABEK_USER;
axios.defaults.baseURL = process.env.REACT_APP_API_END_POINT_RAMADAN_IAM_USER;


export default axios