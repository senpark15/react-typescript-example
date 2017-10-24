import * as React from 'react';
import { observer } from 'mobx-react';

export interface Props {
    todo: any,
    onToggleCompleted: (todo: any) => void,
    onRename: (todo: any) => void;
}

@observer
export class TodoView extends React.Component<Props, object>  {
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={() => this.props.onRename(todo)}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => this.props.onToggleCompleted(todo)}
                />
                {todo.task}
                {todo.assignee
                    ? <small>{todo.assignee.name}</small>
                    : null
                }
            </li>
        );
    }


}
