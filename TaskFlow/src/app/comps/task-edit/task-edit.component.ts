import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})

export class TaskEditComponent {
  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: TaskService,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.parent?.paramMap.get('id'));
    const found = this.service.getTask(id);
    this.task = found ? { ...found } : null;
  }

  save() {
    if (!this.task) {
      return;
    }
    this.service.updateTask(this.task);
    this.router.navigate(['/']);
  }
}