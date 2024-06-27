import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

import { BasicDetailService } from '../../../@data/basic-detail.service';
import { SocialsService } from '../../../@data/socials.service';
import { BasicDetail } from '../../../@data/dto/basic-detail';
import { Social } from '../../../@data/dto/socials';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [
    BasicDetailService,
    SocialsService
  ]
})
export class NavbarComponent {
  name: string = "";
  country: string = "";
  email: string = "";
  position: string = "";
  phoneNumber: string = "";
  socials: Array<Social> = [];
  aboutMe: string[] = []

  constructor(
    private basicDetailService: BasicDetailService,
    private socialsService: SocialsService
  ) {}

  ngOnInit() {
    forkJoin([
      this.basicDetailService.getBasicDetail(),
      this.socialsService.getSocials()
    ])
      .pipe()
      .subscribe(([basicDetail, socials]: [BasicDetail, Social[]]) => {
        this.name = basicDetail.name;
        this.country = basicDetail.country;
        this.position = basicDetail.position;
        this.email = basicDetail.email;
        this.phoneNumber = basicDetail.phoneNumber;
        this.aboutMe = basicDetail.aboutMe;
        this.socials = socials
      })
  }
}
