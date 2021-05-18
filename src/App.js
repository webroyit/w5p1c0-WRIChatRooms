import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (
       <Login />
      ) : (
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
        )}
    </div>
  );
}

export default App;
