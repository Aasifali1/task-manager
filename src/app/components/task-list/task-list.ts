import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  toggleTask(id: number): void {
    this.taskService.updateTaskStatus(id);
  }

  get pendingTaskCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
}
