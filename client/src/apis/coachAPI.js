import axios from 'axios';
import DOMAIN from '../config';

export const getAllCoaches = async () => {
    try {
        const result = await axios.get(`${DOMAIN}/coaches`)
        return result.data;
    } catch (error) {
        console.log(error);
    }

}

export const getCoach = async (id) => {
    try {
        const result = await axios.get(`${DOMAIN}/coaches/` + id);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getCoachByTeam = async (idTeam) => {
    try {
        const result = await axios.get(`${DOMAIN}/coaches/team/` + idTeam)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
