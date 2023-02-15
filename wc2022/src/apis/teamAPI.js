import axios from "axios";
import Link from "../constants/Link";

const url = Link.url_team;

export const getTeam = async (country) => {
    const result = await axios.get(url + country);
    return result.data;
}