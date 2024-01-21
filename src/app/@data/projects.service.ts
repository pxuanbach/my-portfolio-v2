import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectsData, Project } from './dto/projects';

@Injectable()
export class ProjectsService extends ProjectsData {
  projects: Project[] = [
    {
      name: "Early Parrot",
      myRole: "Full-stack",
      shortDes: `EarlyParrot is a <b>SaaS</b> referral marketing platform from Malta 
        that includes marketing automation tools, tracking and analytics features.`,
      startDate: "07/2023",
      endDate: "Present",
      descriptions: [
        "Customize UI according to requirements using AngularJS, Bootstrap.",
        "Develop a feature to support clients in tracking their referral numbers.",
        "Create a scheduler job that uses Agenda to synchronize data from 3rd Integration Apps.",
        "Deploy source code to Development environment using PM2.",
      ],
      keyTechs: [
        "JavaScript", "ExpressJS", "AngularJS", "MongoDB", "Agenda", "PM2", "Bootstrap"
      ]
    },
    {
      name: "Mark Platform",
      myRole: "Backend",
      shortDes: "The Mark Platform is a review and discovery platform for interior designers in Singapore.",
      startDate: "07/2022",
      endDate: "06/2023",
      descriptions: [
        "Create middleware to dynamically authorize user roles.",
        "Use FastAPI to develop APIs and test it with Pytest.",
        "Integrate Stipe payment APIs.",
        "Set up GitLab CI/CD for automatic deployment using Docker on a DigitalOcean Droplet.",
      ],
      keyTechs: [
        "Python", "FastAPI", "PostgreSQL", "Docker", "SQLAlchemy", "Pytest", "Firebase"
      ]
    }
  ];

  override getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
