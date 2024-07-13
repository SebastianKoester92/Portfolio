import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports:[NavbarComponent,
            AboutmeComponent,
            PortfolioComponent,
            MyskillsComponent,
            ContactComponent,
            FooterComponent,
          ],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {
  constructor(private router: Router){}
}
