import axios from "axios"
import Link from "../constants/Link";

const url_topPlayer = Link.url_player.url_topPlayer;
const url_player = Link.url_player.url_playerById;

export const getTopPlayer = async () => {
    const result = await axios.get(url_topPlayer);
    return result.data;
}

export const getPlayer = async (id) => {
    const result = await axios.get(url_player + id);
    return result.data;
}

