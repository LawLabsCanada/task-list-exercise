import { Component, input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskItemViewModel } from './task-item.view-model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
  protected viewModel = new TaskItemViewModel();
  task = input.required<Task>();
  
  constructor() {
    effect(() => {
      this.viewModel.setTask(this.task());
    });
  }

  toggleTask(): void {
    this.viewModel.toggleTask();
  }

  deleteTask(): void {
    this.viewModel.deleteTask();
  }
} 