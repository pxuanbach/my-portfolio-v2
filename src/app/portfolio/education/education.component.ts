import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Education } from '../../@data/dto/educations';

@Component({
  selector: 'app-portfolio-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {

  @Input() educations: Array<Education> = [];

  constructor() {}
}
