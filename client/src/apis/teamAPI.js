import axios from "axios";
import DOMAIN from "../config";

export const getTeam = async (country) => {
    try {
        const result = await axios.get(`${DOMAIN}/teams/` + country);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
