import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {}
  scrollToId(id: string) {
    // Navigiere zur Seite, die die Ziel-ID hat
    this.router.navigate(['/start']).then(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  openLink(repository: string): void{
    console.log('Link wurde aufgerufen: ', repository)
    window.open(repository, '_blank');
  }
}
