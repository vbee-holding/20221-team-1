import axios from "axios"
import DOMAIN from "../config"

export const getAllPost = async () => {
    try {
        const result = await axios.get(`${DOMAIN}/posts`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getPostByTeam = async (idTeam) => {
    try {
        const result = await axios.get(`${DOMAIN}/posts/` + idTeam);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getPostByMatch = async (id) => {
    try {
        const result = await axios.get(`${DOMAIN}/post/` + id);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
