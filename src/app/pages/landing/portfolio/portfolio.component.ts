import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

import { EducationsService } from '../../../@data/educations.service';
import { ExperiencesService } from '../../../@data/experiences.service';
import { SkillsService } from '../../../@data/skills.service';
import { ProjectsService } from '../../../@data/projects.service';
import { PersonalProjectsService } from '../../../@data/personal-projects.service';

import { Education } from '../../../@data/dto/educations';
import { Experience } from '../../../@data/dto/experiences';
import { Skill } from '../../../@data/dto/skills';
import { Project } from '../../../@data/dto/projects';
import { PersonalProject } from '../../../@data/dto/personal-projects';

import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { PersonalProjectComponent } from './personal-project/personal-project.component';

@Component({
  selector: 'app-portfolio-component',
  standalone: true,
  imports: [
    CommonModule,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    ProjectComponent,
    PersonalProjectComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  providers: [
    EducationsService,
    ExperiencesService,
    SkillsService,
    ProjectsService,
    PersonalProjectsService,
  ],
})
export class PortfolioComponent {
  educations: Array<Education> = [];
  experiences: Array<Experience> = [];
  skills: Array<Skill> = [];
  projects: Array<Project> = [];
  personalProjects: Array<PersonalProject> = [];

  constructor(
    private educationsService: EducationsService,
    private experiencesService: ExperiencesService,
    private skillsService: SkillsService,
    private projectsService: ProjectsService,
    private personalProjectsService: PersonalProjectsService
  ) {}

  ngOnInit() {
    forkJoin([
      this.educationsService.getEducations(),
      this.experiencesService.getExperiences(),
      this.skillsService.getSkills(),
      this.projectsService.getProjects(),
      this.personalProjectsService.getPersonalProjects(),
    ])
      .pipe()
      .subscribe(
        ([educations, experiences, skills, projects, personalProjects]: [
          Education[],
          Experience[],
          Skill[],
          Project[],
          PersonalProject[]
        ]) => {
          this.educations = educations;
          this.experiences = experiences;
          this.skills = skills;
          this.projects = projects;
          this.personalProjects = personalProjects;
        }
      );
  }
}
