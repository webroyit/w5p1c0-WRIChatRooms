import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/rooms/:roomId">
              <Sidebar />
              <Chat />
            </Route>
            <Route path="/">
              <Sidebar />
              <h1>Home</h1>
            </Route>
          </Switch>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
