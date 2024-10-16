import React, { useEffect, useState } from 'react';
import { getThreads } from './api';
import './App.css';

const BulletinBoard = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getThreads();
        setThreads(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header className="header">
        <h1>掲示板</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">ホーム</a></li>
            <li><a href="/threads">スレッド一覧</a></li>
            <li><a href="/new">新規作成</a></li>
          </ul>
        </nav>
      </header>
      <ul>
        {threads.map(thread => (
          <li key={thread.id} className="thread-item">{thread.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinBoard;
