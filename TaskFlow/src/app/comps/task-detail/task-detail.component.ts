import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit {
  id = 0;
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: TaskService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.task = this.service.getTask(this.id);
    });
  }
}