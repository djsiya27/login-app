import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from './component/login';
import signup from './component/signup';
import dashboard from './component/dashboard';
import cards from './component/cards';


function App() {
  return (
    <Router>
    <Route exact path="/" component={signup}>
      
    </Route>

    <Route exact path="/login" component={login}>
      
    </Route>

    <Route exact path="/dashboard" component={dashboard}>
      
    </Route>

    <Route exact path="/cards" component={cards}>
      
    </Route>

    </Router>
  );
}

export default App;
