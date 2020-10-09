import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './containers/Homepage';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Homepage} />
    </div>
  </Router>
);

export default App;
