import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// CSS Styles
import './App.css';

// Import Components
import AsteroidList from './component/AsteroidList';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/asteroids" />} />
        <Route exact path="/asteroids" component={AsteroidList} />

      </Switch>
    </Router>
    
  );
}

export default App;
