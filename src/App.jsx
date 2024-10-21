import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BulletinBoard from './BulletinBoard';
import CreateThread from './CreateThread';
import ThreadPosts from './ThreadPosts';
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<BulletinBoard />} />
          <Route path="/threads/new" element={<CreateThread />} />
          <Route path="/thread/:thread_id" element={<ThreadPosts />} />
        </Routes>
      </Router>
  );
}

export default App;
