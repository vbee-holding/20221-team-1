import axios from 'axios';

export async function fetchApi(url, options = {}) {
    try {
        const response = await axios.get(url, options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
