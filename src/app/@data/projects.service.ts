import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectsData, Project } from './dto/projects';
import ProjectsJson from '../../assets/db/projects.json';


@Injectable()
export class ProjectsService extends ProjectsData {

  projects: Project[] = ProjectsJson;

  override getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
