import axios from "axios"
import Link from "../constants/Link"

const url = Link.url_group

export const getGroupMatchByTeam = async (idTeam) => {
    const result = await axios.get(url + 'team/' + idTeam);
    return result.data;
}

export const getAllGroup = async () => {
    const result = await axios.get(url);
    return result.data;
}