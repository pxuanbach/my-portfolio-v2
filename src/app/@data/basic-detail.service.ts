import { Injectable } from '@angular/core';
import { BasicDetail, BasicDetailData } from './dto/basic-detail';
import { Observable, of } from 'rxjs';
import BasicDetailJson from '../../assets/db/basic-detail.json';


@Injectable()
export class BasicDetailService extends BasicDetailData {
  name: string = BasicDetailJson.name;
  country: string = BasicDetailJson.country;
  phoneNumber: string = BasicDetailJson.phoneNumber;
  position: string = BasicDetailJson.position;
  email: string = BasicDetailJson.email;
  aboutMe: string[] = BasicDetailJson.aboutMe;

  getBasicDetail(): Observable<BasicDetail> {
    return of({
      name: this.name,
      country: this.country,
      position: this.position,
      phoneNumber: this.phoneNumber,
      email: this.email,
      aboutMe: this.aboutMe,
    });
  }
}
