import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { TaskState } from '../../store/task.state';
import { Task } from '../../models/task.model';
import { toSignal } from '@angular/core/rxjs-interop';

export class TaskListViewModel {
  private store = inject(Store);
  
  // Convert Observable to Signal
  tasks = toSignal<Task[]>(this.store.select(TaskState.getTasks));
} 