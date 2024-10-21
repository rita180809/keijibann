import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getThreadPosts } from './api';

const ThreadPosts = () => {
    const{thread_id} = useParams();
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async() =>{
            try {
                const data = await getThreadPosts(thread_id);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching thread post:',error);
            }
        };

        fetchData();
    },[thread_id]);

  return (
    <div>
        <h1>投稿一覧</h1>
        <ul>
            {posts.map(post =>(
                <li key={post.id}>{post.content}</li>
            ))}
        </ul>
    </div>
  );
}

export default ThreadPosts