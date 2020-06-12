import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestFetch } from './action';
import Login from './pages/Login';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';

class App extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/play" component={Game} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/settings" component={Settings} />
          <Route component={Login}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispacthToProps = (dispatch) => ({
  getData: () => dispatch(requestFetch()),
});

App.propTypes = {
  getData: PropTypes.func.isRequired,
};

export default connect(null, mapDispacthToProps)(App);
