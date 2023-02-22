import axios from 'axios';
import DOMAIN from '../config';

export const getAllMatch = async () => {
    try {
        const result = await axios.get(`${DOMAIN}/matches`);
        return result.data;
    } catch (error) {
        console.log(error);
    }

}

export const getMatch = async (id) => {
    try {
        const result = await axios.get(`${DOMAIN}/matches/` + id);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
