import { Component } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landing-view',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioComponent, 
    NavbarComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
