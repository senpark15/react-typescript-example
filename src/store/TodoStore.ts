
import { observable, computed, action, useStrict } from 'mobx';

useStrict(true);
export class ObservableTodoStore {

    @observable todos = <any>[];
    @observable pendingRequests: number = 0;

    constructor() {
    }

    @computed get completedTodosCount() {
        return this.todos.filter(
            (todo: any) => todo.completed === true
        ).length;
    }

    @computed get report() {
        if (this.todos.length === 0)
            return "<none>";
        return `Next todo: "${this.todos[0].task}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    @action addTodo(task: any) {
        this.todos.push({
            id: Math.random(),
            task: task,
            completed: false,
            assignee: null
        });
    }

    @action onToggleCompleted = (todo: any) => {
        todo.completed = !todo.completed;
    }

    @action onRename = (todo: any) => {
        todo.task = prompt('Task name', todo.task) || todo.task;
    }
}


export const observableTodoStore = new ObservableTodoStore();
