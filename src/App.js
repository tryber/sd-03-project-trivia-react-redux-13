import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/play" component={Game} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
