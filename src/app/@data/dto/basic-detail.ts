import { Observable } from 'rxjs';

export interface BasicDetail {
  name: string;
  country: string;
  email: string;
  position: string;
  phoneNumber: string;
  aboutMe: string[];
}

export abstract class BasicDetailData {
  abstract getBasicDetail(): Observable<BasicDetail>;
}