import { Observable } from 'rxjs';

export interface Experience {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
  keyTechs?: string[];
}

export abstract class ExperiencesData {
  abstract getExperiences(): Observable<Experience[]>;
}