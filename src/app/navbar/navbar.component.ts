import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}


/**
 * Scrolls smoothly to an HTML element with the given id after navigating to the specified route.
 * 
 * @param {string} id - The id of the HTML element to scroll to.
 * 
 * This function navigates to the provided route using Angular's Router. Once the navigation is 
 * complete, it locates the element by its id and smoothly scrolls it into view if found. 
 * The 'scrollIntoView' method is used with a smooth scrolling behavior for a better user experience.
 */
  scrollToIdMobile(id: string) {
    this.router.navigate(['/start']).then(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
    this.showOrCloseDropdown();
  }

  scrollToId(id: string) {
    this.router.navigate(['/start']).then(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }


  /** 
 * Toggles the visibility of a dropdown menu.
 * 
 * This method switches the value of `isDropdownVisible` between
 * `true` and `false`, effectively showing or hiding the dropdown
 * based on its current state.
 */
  isDropdownVisible: boolean = false;
  showOrCloseDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }




}
