import { Observable } from 'rxjs';

export interface Project {
  name: string;
  myRole: string;
  shortDes: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
  keyTechs: string[];
}

export abstract class ProjectsData {
  abstract getProjects(): Observable<Project[]>;
}