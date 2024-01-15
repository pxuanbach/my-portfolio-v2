import { Component } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  name: string = "";
  country: string = "";
  phone_number: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.name = this.dataService.name;
    this.country = this.dataService.country;
    this.phone_number = this.dataService.phone_number;
  }
}
