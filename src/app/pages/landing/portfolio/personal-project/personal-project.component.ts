import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-personal-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-project.component.html',
  styleUrl: './personal-project.component.scss',
})
export class PersonalProjectComponent {

  @Input() personalProjects: Array<any> = [];

  constructor() {}
}
