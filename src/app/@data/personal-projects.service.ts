import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonalProjectsData, PersonalProject } from './dto/personal-projects';
import PersonalProjectsJson from '../../assets/db/personal-projects.json';


@Injectable()
export class PersonalProjectsService extends PersonalProjectsData {

  projects: PersonalProject[] = PersonalProjectsJson;

  override getPersonalProjects(): Observable<PersonalProject[]> {
    return of(this.projects);
  }
}
