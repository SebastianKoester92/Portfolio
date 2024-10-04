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
  
// Reference to multiple div elements marked with the template reference variable 'projectDiv'
@ViewChildren('projectDiv') projectDivs!: QueryList<ElementRef>;

  /**
 * ngAfterViewInit lifecycle hook.
 * 
 * This function sets up an IntersectionObserver to watch for when certain elements (projectDivs)
 * enter or leave the viewport, triggering sliding animations based on their intersection state.
 * 
 * The function works as follows:
 * - Observes elements (projectDivs) using IntersectionObserver.
 * - For each observed entry, if the element is intersecting the viewport, it applies 
 *   either a 'slide-in-right' or 'slide-in-left' class, depending on the element's data-slide-direction attribute.
 * - If the element is not intersecting the viewport, it applies 'slide-out-right' or 'slide-out-left' 
 *   based on the same attribute.
 * - Each projectDiv is assigned a `data-slide-direction` based on its index:
 *   - Even index: 'right' (slide from right).
 *   - Odd index: 'left' (slide from left).
 */
ngAfterViewInit() {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let slideDirection = entry.target.getAttribute('data-slide-direction');
        if (slideDirection === 'right') {
          entry.target.classList.add('slide-in-right');
          entry.target.classList.remove('slide-out-right');
        } else {
          entry.target.classList.add('slide-in-left');
          entry.target.classList.remove('slide-out-left');
        }
      } else {
        let slideDirection = entry.target.getAttribute('data-slide-direction');
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

  this.projectDivs.forEach((projectDiv: ElementRef, index: number) => {
    const element = projectDiv.nativeElement;
    if (index % 2 === 0) {
      element.setAttribute('data-slide-direction', 'right');
    } else {
      element.setAttribute('data-slide-direction', 'left');
    }
    observer.observe(element);
  });
}

/**
 * Opens the provided repository URL in a new browser tab.
 * 
 * @param {string} repository - The URL of the repository to open.
 */
openLink(repository: string): void{
  window.open(repository, '_blank');
}

}
