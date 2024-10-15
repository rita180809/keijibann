import axios from 'axios';

const BASE_URL = 'https://railway.bulletinboard.techtrain.dev';

export const getPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};
