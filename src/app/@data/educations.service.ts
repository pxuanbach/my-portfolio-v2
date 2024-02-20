import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Education, EducationsData } from "./dto/educations";
import EducationsJson from './db/educations.json';


@Injectable()
export class EducationsService extends EducationsData {

  educations: Education[] = EducationsJson;

  override getEducations(): Observable<Education[]> {
    return of(this.educations)
  }

}