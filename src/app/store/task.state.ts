import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Task } from '../models/task.model';

export interface TaskStateModel {
  tasks: Task[];
}

export class AddTask {
  static readonly type = '[Task] Add';
  constructor(public title: string) {}
}

export class ToggleTask {
  static readonly type = '[Task] Toggle';
  constructor(public id: string) {}
}

export class DeleteTask {
  static readonly type = '[Task] Delete';
  constructor(public id: string) {}
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: []
  }
})
@Injectable()
export class TaskState {
  @Selector()
  static getTasks(state: TaskStateModel) {
    return state.tasks;
  }

  @Action(AddTask)
  addTask(ctx: StateContext<TaskStateModel>, action: AddTask) {
    const state = ctx.getState();
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: action.title,
      completed: false,
      createdAt: new Date()
    };
    ctx.setState({
      ...state,
      tasks: [...state.tasks, newTask]
    });
  }

  @Action(ToggleTask)
  toggleTask(ctx: StateContext<TaskStateModel>, action: ToggleTask) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      )
    });
  }

  @Action(DeleteTask)
  deleteTask(ctx: StateContext<TaskStateModel>, action: DeleteTask) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      tasks: state.tasks.filter(task => task.id !== action.id)
    });
  }
} 