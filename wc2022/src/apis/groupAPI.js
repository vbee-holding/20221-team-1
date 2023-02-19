import axios from "axios"
import DOMAIN from "../config";

export const getGroupMatchByTeam = async (idTeam) => {
    try {
        const result = await axios.get(`${DOMAIN}/group-stage/team/` + idTeam);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getAllGroup = async () => {
    try {
        const result = await axios.get(`${DOMAIN}/group-stage`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getGroupByLetter = async (letter) => {
    try {
        const result = await axios.get(`${DOMAIN}/group-stage/` + letter)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
