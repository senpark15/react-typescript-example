import * as React from 'react';
import authStore from './store/AuthStore';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoginForm from './components/setup/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={props => (
    authStore.user ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
