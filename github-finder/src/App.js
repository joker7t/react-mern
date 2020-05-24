import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { HOME_PATH, USER_PATH } from "./utils/constant";
import Landing from './components/Landing';
import MainNav from './components/layouts/MainNav';
import User from './components/users/User';
import NotFound from "./components/layouts/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainNav icon="fa fa-github" title="Github Finder" />
        <div className="App" style={{ marginTop: "70px" }}>
          <Switch>
            <Route exact path={USER_PATH} component={User} />
            <Route exact path={HOME_PATH} component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
