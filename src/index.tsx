import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoList } from './TodoList';
import App from './App';
import { observableTodoStore } from './store/TodoStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
