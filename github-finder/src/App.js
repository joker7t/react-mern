import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { HOME_PATH } from "./utils/constant";
import Landing from './components/Landing';
import MainNav from './components/layouts/MainNav';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainNav icon="fa fa-github" title="Github Finder" />
        <div className="App" style={{ marginTop: "70px" }}>
          <Route exact path={HOME_PATH} component={Landing} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
