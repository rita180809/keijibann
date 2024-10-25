import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/threads/:thread_id" element={<ThreadPosts />} />{/* これでルート設定が正しいか確認 */}
        </Routes>
      </Router>
  );
}

export default App;
