import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {
  
  @ViewChildren('projectDiv') projectDivs!: QueryList<ElementRef>; // Referenz auf mehrere div-Elemente

  ngAfterViewInit() {
    let isSlideFromRight = true; // Zählervariable für die Slide-Richtung

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Überprüfen, ob das Element von rechts oder von links sliden soll
          const slideDirection = entry.target.getAttribute('data-slide-direction');
          if (slideDirection === 'right') {
            entry.target.classList.add('slide-in-right');
            entry.target.classList.remove('slide-out-right');
          } else {
            entry.target.classList.add('slide-in-left');
            entry.target.classList.remove('slide-out-left');
          }
        } else {
          // Element ist nicht im Sichtfeld, Animation entfernen
          const slideDirection = entry.target.getAttribute('data-slide-direction');
          if (slideDirection === 'right') {
            entry.target.classList.add('slide-out-right');
            entry.target.classList.remove('slide-in-right');
          } else {
            entry.target.classList.add('slide-out-left');
            entry.target.classList.remove('slide-in-left');
          }
        }
      });
    });

    // Beobachte jedes 'projectDiv'-Element und füge abwechselnde Slide-Richtungen hinzu
    this.projectDivs.forEach((projectDiv: ElementRef, index: number) => {
      const element = projectDiv.nativeElement;
      // Weise abwechselnd die Slide-Richtung zu (rechts und links)
      if (index % 2 === 0) {
        element.setAttribute('data-slide-direction', 'right');
      } else {
        element.setAttribute('data-slide-direction', 'left');
      }
      observer.observe(element);
    });
  }


  openLink(repository: string): void{
    window.open(repository, '_blank');
  }

}
