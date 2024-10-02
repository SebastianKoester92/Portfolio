import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {

  @ViewChild('projectDiv') projectDiv!: ElementRef; // Referenz auf das div-Element

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Wenn das Element im Sichtfeld ist, füge die Klasse für das Hereinsliden hinzu
          entry.target.classList.add('slide-in');
          entry.target.classList.remove('slide-out'); // Stelle sicher, dass die Klasse für das Herausgleiten entfernt wird
        } else {
          // Wenn das Element das Sichtfeld verlässt, füge die Klasse für das Herausgleiten hinzu
          entry.target.classList.add('slide-out');
          entry.target.classList.remove('slide-in'); // Stelle sicher, dass die Klasse für das Hereinsliden entfernt wird
        }
      });
    });

    observer.observe(this.projectDiv.nativeElement); // Beobachte das Element
  }

  

  openLink(repository: string): void{
    window.open(repository, '_blank');
  }

}
