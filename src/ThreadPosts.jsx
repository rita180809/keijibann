import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getThreadPosts, createPost } from './api';
import './ThreadPosts.css'; // CSSファイルをインポート

const ThreadPosts = () => {
    const { thread_id } = useParams();
    const [posts, setPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getThreadPosts(thread_id);
                console.log('Fetched data:', data);
                if (data && Array.isArray(data.posts)) {
                    setPosts(data.posts);
                } else {
                    console.error('Received data is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching thread posts:', error);
            }
        };

        fetchData();
    }, [thread_id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting new post:', newPostContent);
        try {
            await createPost(thread_id, newPostContent);
            const updatedPosts = await getThreadPosts(thread_id);
            console.log('Updated posts:', updatedPosts);
            if (updatedPosts && Array.isArray(updatedPosts.posts)) {
                setPosts(updatedPosts.posts);
            } else {
                console.error('Received data is not an array:', updatedPosts);
            }
            setNewPostContent('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="thread-posts-container">
            <h1>投稿一覧</h1>
            <ul>
                {Array.isArray(posts) && posts.map(post => (
                    <li key={post.id}>{post.post}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    投稿:
                    <input
                        type="text"
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">投稿</button>
            </form>
            <Link to="/" className="home-button">ホームに戻る</Link> {/* ホームに戻るボタンを追加 */}
        </div>
    );
};

export default ThreadPosts;
