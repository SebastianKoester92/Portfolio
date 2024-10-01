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



  scrollToIdMobile(id: string) {
    // Navigiere zur Seite, die die Ziel-ID hat
    this.router.navigate(['/start']).then(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
    this.showOrCloseDropdown();
  }

  scrollToId(id: string) {
    // Navigiere zur Seite, die die Ziel-ID hat
    this.router.navigate(['/start']).then(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }





  // open and close the dropDownmenu
  isDropdownVisible: boolean = false;
  showOrCloseDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }




}
