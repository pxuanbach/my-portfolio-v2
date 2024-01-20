import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

import { EducationsService } from '../@data/educations.service';
import { ExperiencesService } from '../@data/experiences.service';
import { SkillsService } from '../@data/skills.service';

import { Education } from '../@data/dto/educations';
import { Experience } from '../@data/dto/experiences';
import { Skill } from '../@data/dto/skills';

import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  providers: [EducationsService, ExperiencesService, SkillsService],
})
export class PortfolioComponent {
  educations: Array<Education> = [];
  experiences: Array<Experience> = [];
  skills: Array<Skill> = [];

  constructor(
    private educationsService: EducationsService,
    private experiencesService: ExperiencesService,
    private skillsService: SkillsService
  ) {}

  ngOnInit() {
    forkJoin([
      this.educationsService.getEducations(),
      this.experiencesService.getExperiences(),
      this.skillsService.getSkills(),
    ])
      .pipe()
      .subscribe(
        ([educations, experiences, skills]: [
          Education[],
          Experience[],
          Skill[]
        ]) => {
          this.educations = educations;
          this.experiences = experiences;
          this.skills = skills;
        }
      );
  }
}
