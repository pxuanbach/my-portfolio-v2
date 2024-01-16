import { Observable } from 'rxjs';

export interface Description {
  content: string;
}

export interface Experience {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  descriptions: Description[];
}

export abstract class ExperiencesData {
  abstract getExperiences(): Observable<Experience[]>;
}