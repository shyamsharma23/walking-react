import axios from "axios";

export default axios.create({
    baseURL: 'http://ec2-54-208-26-38.compute-1.amazonaws.com:3000/api/v1',

})