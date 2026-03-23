import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-edit.component.html'
})

export class TaskEditComponent {
  task: any;
  constructor(private route: ActivatedRoute, private service: TaskService, private router: Router) {
    const id = Number(this.route.snapshot.parent?.paramMap.get('id'));
    this.task = { ...this.service.getTask(id) };
}

save() {
  this.service.updateTask(this.task);
  this.router.navigate(['/']);
}
}