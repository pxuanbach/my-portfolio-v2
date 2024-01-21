import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

import { EducationsService } from '../@data/educations.service';
import { ExperiencesService } from '../@data/experiences.service';
import { SkillsService } from '../@data/skills.service';
import { ProjectsService } from '../@data/projects.service';

import { Education } from '../@data/dto/educations';
import { Experience } from '../@data/dto/experiences';
import { Skill } from '../@data/dto/skills';
import { Project } from '../@data/dto/projects';

import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    ProjectComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  providers: [EducationsService, ExperiencesService, SkillsService, ProjectsService],
})
export class PortfolioComponent {
  educations: Array<Education> = [];
  experiences: Array<Experience> = [];
  skills: Array<Skill> = [];
  projects: Array<Project> = [];

  constructor(
    private educationsService: EducationsService,
    private experiencesService: ExperiencesService,
    private skillsService: SkillsService,
    private projectsService: ProjectsService,
  ) {}

  ngOnInit() {
    forkJoin([
      this.educationsService.getEducations(),
      this.experiencesService.getExperiences(),
      this.skillsService.getSkills(),
      this.projectsService.getProjects()
    ])
      .pipe()
      .subscribe(
        ([educations, experiences, skills, projects]: [
          Education[],
          Experience[],
          Skill[],
          Project[]
        ]) => {
          this.educations = educations;
          this.experiences = experiences;
          this.skills = skills;
          this.projects = projects;
        }
      );
  }
}
