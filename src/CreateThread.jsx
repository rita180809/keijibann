import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateThread = () => {
  const [title, setTitle] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      Navigate('/');
    } catch (error) {
      console.error('Error creating thread:', error);
    }
  };

  return (
    <div>
      <h1>スレッド新規作成</h1>
      <form onSubmit={handleSubmit}>
        <label>
          タイトル:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default CreateThread;
