import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // นำเข้า RouterOutlet
  template: `
    <router-outlet></router-outlet>
  `
})
export class App {}