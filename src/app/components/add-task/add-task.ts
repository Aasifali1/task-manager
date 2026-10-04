import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTaskComponent {

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {

    this.taskForm = this.fb.group({

      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      priority: [
        'Medium',
        Validators.required
      ],

      completed: [
        false
      ]

    });
  }

  addTask(): void {

    if (this.taskForm.invalid) {

      this.taskForm.markAllAsTouched();

      return;
    }

    const newTask = {
      id: Date.now(),
      title: this.taskForm.value.title,
      priority: this.taskForm.value.priority,
      completed: this.taskForm.value.completed
    };

    this.taskService.addTask(newTask);

    this.taskForm.reset({
      title: '',
      priority: 'Medium',
      completed: false
    });

    this.router.navigate(['/tasks']);
  }

  clearForm(): void {

    this.taskForm.reset({
      title: '',
      priority: 'Medium',
      completed: false
    });

  }
}
