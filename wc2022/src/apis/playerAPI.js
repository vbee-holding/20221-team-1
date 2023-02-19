import axios from "axios"
import DOMAIN from "../config";

export const getTopPlayer = async () => {
    try {
        const result = await axios.get(`${DOMAIN}/players-top50`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getPlayer = async (id) => {
    try {
        const result = await axios.get(`${DOMAIN}/players/` + id);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getPlayerByTeam = async (idTeam) => {
    try {
        const result = await axios.get(`${DOMAIN}/player/` + idTeam)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
