import React from 'react';
import Client from './Pages/Client';
import Table from './Pages/Table'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Client} />
        <Route path='/table' component={Table} />
    
      
        </Router>
    </div>
  );
}

export default App;
