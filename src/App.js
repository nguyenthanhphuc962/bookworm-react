import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'

const App = () => <div>
    <div className="ui container">
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </div>
</div>

export default App;
