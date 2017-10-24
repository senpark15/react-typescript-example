import * as React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">About</Link></li>
        <li><Link to="/register">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </div>
  </Router>
    );
  }
}

export default App;
