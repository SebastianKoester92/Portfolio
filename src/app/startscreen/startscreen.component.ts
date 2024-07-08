import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [NavbarComponent, AboutmeComponent],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {
  constructor(private router: Router){}
}
