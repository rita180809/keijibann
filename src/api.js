const BASE_URL = 'https://railway.bulletinboard.techtrain.dev';

export const getThreads = async (offset = 0) => {
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

export const getThreadPosts = async (thread_id, offset = 0) => {
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

export const createPost = async (thread_id, content) => {
    try {
        const response = await fetch(`${BASE_URL}/threads/${thread_id}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ post: content })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};
