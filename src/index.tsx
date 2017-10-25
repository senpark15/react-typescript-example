import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoList } from './TodoList';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './main.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
