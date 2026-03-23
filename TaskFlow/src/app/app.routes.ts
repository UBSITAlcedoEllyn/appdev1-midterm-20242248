import { Routes } from '@angular/router';
import { TaskListComponent } from './comps/task-list/task-list.component';
import { TaskDetailComponent } from './comps/task-detail/task-detail.component';
import { TaskAddComponent } from './comps/task-add/task-add.component';

export const routes: Routes = [
    { path: '', component: TaskListComponent },
    { path: 'add', component: TaskAddComponent },
    {path: 'task/:id',component: TaskDetailComponent,
        
        children: [
            { path: '', loadComponent: () => import('./comps/task-info/task-info.component').then(m => m.TaskInfoComponent) },
            { path: 'edit', loadComponent: () => import('./comps/task-edit/task-edit.component').then(m => m.TaskEditComponent) }
        ]
    }
];