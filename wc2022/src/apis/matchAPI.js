import axios from 'axios';
import Link from '../constants/Link';

const url = Link.url_match;

export const getAllMatch = async () => {
    const result = await axios.get(url);
    return result.data;
}

export const getMatch = async (id) => {
    const result = await axios.get(url + id);
    return result.data;
}
