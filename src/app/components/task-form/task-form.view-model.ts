import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddTask } from '../../store/task.state';
import { signal } from '@angular/core';

export class TaskFormViewModel {
  private fb = inject(FormBuilder);
  private store = inject(Store);

  taskForm: FormGroup;
  isInvalid = signal(false);
  isTouched = signal(false);

  constructor() {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]]
    });

    // Watch form state changes
    this.taskForm.statusChanges.subscribe(() => {
      this.isInvalid.set(this.taskForm.get('title')?.invalid ?? false);
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.store.dispatch(new AddTask(this.taskForm.get('title')?.value));
      this.taskForm.reset();
      this.isTouched.set(false);
    }
  }

  onBlur(): void {
    this.isTouched.set(true);
  }
} 