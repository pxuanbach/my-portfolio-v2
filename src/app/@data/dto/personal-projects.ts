import { Observable } from 'rxjs';

export interface PersonalProject {
  name: string;
  url: string;
  shortDes: string;
  keyTechs: string[];
}

export abstract class PersonalProjectsData {
  abstract getPersonalProjects(): Observable<PersonalProject[]>;
}
