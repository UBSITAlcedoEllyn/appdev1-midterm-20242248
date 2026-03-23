import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent {}