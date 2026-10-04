import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular',
      priority: 'High',
      completed: false
    },
    {
      id: 2,
      title: 'Complete assignment',
      priority: 'Medium',
      completed: false
    },
    {
      id: 3,
      title: 'Read documentation',
      priority: 'Low',
      completed: true
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTaskStatus(id: number): void {
    const task = this.tasks.find(task => task.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }
}
