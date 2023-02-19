import axios from "axios"
import DOMAIN from "../config";

export const getKnockoutByTeam = async (idTeam) => {
    try {
        const result = await axios.get(`${DOMAIN}/knockout-stage/` + idTeam);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
