import { inject } from '@angular/core';
import { Task } from '../../models/task.model';
import { DeleteTask, ToggleTask } from '../../store/task.state';
import { signal } from '@angular/core';
import { Store } from '@ngxs/store';

export class TaskItemViewModel {
  private _task = signal<Task | null>(null);
  private store = inject(Store);
  setTask(task: Task): void {
    this._task.set(task);
  }

  getTask(): Task {
    const task = this._task();
    if (!task) {
      throw new Error('Task not set');
    }
    return task;
  }

  toggleTask(): void {
    const task = this.getTask();
    this.store.dispatch(new ToggleTask(task.id));
  }

  deleteTask(): void {
    const task = this.getTask();
    this.store.dispatch(new DeleteTask(task.id));
  }
} 