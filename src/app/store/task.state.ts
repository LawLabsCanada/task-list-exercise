import { State, Action, StateContext, Selector } from '@ngxs/store';

export interface TaskStateModel {
  tasks: any[]; // Candidate will define the task interface
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: []
  }
})
export class TaskState {
  // Candidate will implement selectors and actions
} 