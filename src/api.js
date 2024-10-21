const BASE_URL = 'https://railway.bulletinboard.techtrain.dev';

export const getThreads = async () => {
    try {
        const response = await fetch(`${BASE_URL}/threads`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching threads:', error);
        throw error;
    }
};

export const getThreadPosts = async (thread_id) => {
  try{
    const response = await fetch(`${BASE_URL}/threads/${thread_id}/posts`);
    if (!response.ok){
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
    }catch(error){
        console.error('Error fetching thread posts:', error);
        throw error;
    }
};
