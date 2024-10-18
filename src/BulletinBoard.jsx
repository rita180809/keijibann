import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/">スレッド一覧</Link></li>
            <li><Link to="/threads/new">新規作成</Link></li>
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
