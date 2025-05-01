import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskListViewModel } from './task-list.view-model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  protected viewModel = new TaskListViewModel();
} 