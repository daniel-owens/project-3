import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from 'SignUp.js';
import Login from 'Login.js';
import Index from 'index.js';


const App = () => (
  <Router>
    <div>
      <Nav />

      <Switch>

        <Route exact path='/signup' component={ SignUp } />
        <Route exact path='/login' component={ Login } />

        <PrivateRoute exact path='/members' component={ Members } />
        <PrivateRoute exact path='/conversation/new' component={ CreateConversation } />

        <Route component={ NoMatch } />

      </Switch>

    </div>
  </Router>
)

export default App
