import axios from 'axios';
import config from '../config/config';

const signup = async(data)=>{
    try {
        const result = await axios.post(`${config.domainAuth}/signup`,data);
        return result;    
    } catch (error) {
        return error;
    }
}

const signin = async(data)=>{
    try {
        const result = await axios.post(`${config.domainAuth}/signin`,data); //dari kak naufal
        // const result = await axios.post(`${config.domainAuth}/loginTest`,data); //untuk testing aja
        return result;    
    } catch (error) {
        return error;
    }
}

export default {
    signin,
    signup
}