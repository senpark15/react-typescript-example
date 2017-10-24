import * as React from 'react';
import { observer } from 'mobx-react';
import { ObservableTodoStore } from './store/TodoStore';
import { TodoView } from './TodoView';
import DevTools from 'mobx-react-devtools';

@observer
export class TodoList extends React.Component<{ store: ObservableTodoStore }> {
    render() {
        const store = this.props.store;
        return (
            <div>
                {store.report}
                <ul>
                    {store.todos.map(
                        (todo: any, idx: any) => <TodoView todo={todo} onRename={store.onRename}
                            onToggleCompleted={store.onToggleCompleted} key={idx} />
                    )}
                </ul>
                {store.pendingRequests > 0 ? <span>Loading...</span> : null}
                <button onClick={this.onNewTodo}>New Todo</button>
                <small> (double-click a todo to edit)</small>
                <DevTools />
            </div>
        );
    }

    onNewTodo = () => {
        this.props.store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
    }
}