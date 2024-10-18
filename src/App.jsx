import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BulletinBoard from './BulletinBoard';
import CreateThread from './CreateThread';
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<BulletinBoard />} />
          <Route path="/threads/new" element={<CreateThread />} />
        </Routes>
      </Router>
  );
}

export default App;
