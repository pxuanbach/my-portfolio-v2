import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Education, EducationsData } from "./dto/educations";


@Injectable()
export class EducationsService extends EducationsData {

  educations: Education[] = [
    {
      name: "University of Information Technology - Ho Chi Minh City",
      startDate: "08/2019",
      endDate: "09/2023",
      gpa: 8.31,
      max_gpa: 10,
      major: "Software Engineer"
    },
  ]

  override getEducations(): Observable<Education[]> {
    return of(this.educations)
  }

}