import { Observable } from 'rxjs';

export interface Social {
  name: string;
  link: string;
  hidden: boolean;
}

export abstract class SocialsData {
  abstract getSocials(): Observable<Social[]>;
}