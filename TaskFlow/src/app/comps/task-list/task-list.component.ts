import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: any[] = [];

  constructor(private service: TaskService) {
    this.tasks = this.service.getTasks();
  }

  delete(id: number) {
    this.service.deleteTask(id);
    this.tasks = this.service.getTasks();
  }
}