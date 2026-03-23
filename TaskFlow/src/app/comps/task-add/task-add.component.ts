import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})

export class TaskAddComponent {
  task: any = { status: 'Pending', priority: 'Low' };
  constructor(private service: TaskService, private router: Router) {}

submit() {
  this.service.addTask(this.task);
  this.router.navigate(['/']);
}

}