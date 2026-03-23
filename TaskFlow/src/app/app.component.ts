import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { naviComponent } from './comps/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, naviComponent],
})

export class AppComponent {}