import axios from "axios"
import DOMAIN from "../config";

export const getStatistic = async () => {
    try {
        const result = await axios.get(`${DOMAIN}/statistic`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
