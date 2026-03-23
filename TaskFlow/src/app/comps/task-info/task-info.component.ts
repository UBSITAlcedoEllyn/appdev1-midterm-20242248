import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-info',
  standalone: true,
  templateUrl: './task-info.component.html'
})

export class TaskInfoComponent {
  task: any;
  constructor(private route: ActivatedRoute, private service: TaskService) {
    const id = Number(this.route.snapshot.parent?.paramMap.get('id'));
    this.task = this.service.getTask(id);
  }
}
