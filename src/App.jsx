import { useState } from 'react';
import BulletinBoard from './BulletinBoard';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CreateThread from './CreateThread';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={BulletinBoard} />
          <Route path="/threads/new" component={CreateThread} />
        </Switch>
      </Router>

      <BulletinBoard />
    </>
  );
}

export default App;
