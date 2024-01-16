import { Injectable } from '@angular/core';
import { BasicDetail, BasicDetailData } from './dto/basic-detail';
import { Observable, of } from 'rxjs';

@Injectable()
export class BasicDetailService extends BasicDetailData {
  name: string = 'Bach Pham';
  country: string = 'Ho Chi Minh City, Vietnam';
  phoneNumber: string = '(+84) 37*****85';
  email: string = 'pxuanbach.dev@gmail.com';
  aboutMe: string =
    `
    I am an aspiring <b>software engineer</b> who enjoys connecting the dots by the use of technology.
    <br/> <br/>
    I consider myself a kind, empathetic, creative and determined person. I am pragmatic and organized, yet flexible.
    `;

  getBasicDetail(): Observable<BasicDetail> {
    return of({
      name: this.name,
      country: this.country,
      phoneNumber: this.phoneNumber,
      email: this.email,
      aboutMe: this.aboutMe,
    });
  }
}
