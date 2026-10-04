import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list';
import { AddTaskComponent } from './components/add-task/add-task';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },

  {
    path: 'tasks',
    component: TaskListComponent
  },

  {
    path: 'add-task',
    component: AddTaskComponent
  },

  {
    path: '**',
    redirectTo: 'tasks'
  }

];
