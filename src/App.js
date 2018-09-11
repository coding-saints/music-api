import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavPage from "./components/layout/NavPage/NavPage"
import Index from "./components/layout/Index/Index"
import './App.css';

class App extends Component {
  render() {
    return (
     <Router>
      <React.Fragment>
        <NavPage />
          <div className="container">
            <Switch>
              <Route exact={true} path="/" component={Index} />
            </Switch>
          </div>
      </React.Fragment>
     </Router>
    )
  }
}

export default App;
