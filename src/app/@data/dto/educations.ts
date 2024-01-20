import { Observable } from 'rxjs';

export interface Education {
  name: string;
  major: string;
  startDate: string;
  endDate: string;
  gpa: number;
  max_gpa: number;
}

export abstract class EducationsData {
  abstract getEducations(): Observable<Education[]>;
}