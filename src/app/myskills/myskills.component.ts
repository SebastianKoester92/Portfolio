import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {
  constructor(private router: Router) {}
  
  /**
 * Scrolls smoothly to an HTML element with the given id after navigating to the specified route.
 * 
 * @param {string} id - The id of the HTML element to scroll to.
 * @param {string} route - The route to navigate to before scrolling.
 * 
 * This function navigates to the provided route using Angular's Router. Once the navigation is 
 * complete, it locates the element by its id and smoothly scrolls it into view if found. 
 * The 'scrollIntoView' method is used with a smooth scrolling behavior for a better user experience.
 */
scrollToId(id: string) {
  this.router.navigate(['/start']).then(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
}
