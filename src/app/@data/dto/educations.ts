import { Observable } from 'rxjs';

export interface Education {
  name: string;
  major: string;
  startDate: string;
  endDate: string;
  gpa: number;
  maxGpa: number;
}

export abstract class EducationsData {
  abstract getEducations(): Observable<Education[]>;
}