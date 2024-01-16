import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Experience, ExperiencesData } from "./dto/experiences";


@Injectable()
export class ExperiencesService extends ExperiencesData {

  experiences: Experience[] = [
    {
      companyName: "TiSoHa Software Solution",
      position: "Software Engineer",
      startDate: "2022",
      endDate: "2023",
      descriptions: [
        {
          content: ""
        }
      ]
    }
  ]

  override getExperiences(): Observable<Experience[]> {
    return of(this.experiences)
  }

}