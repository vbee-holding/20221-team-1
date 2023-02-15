import axios from "axios"
import Link from "../constants/Link";

const url = Link.url_knockout;

export const getKnockoutByTeam = async (idTeam) => {
    const result = await axios.get(url + idTeam);
    return result.data;
}