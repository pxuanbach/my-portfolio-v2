import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Experience, ExperiencesData } from "./dto/experiences";


@Injectable()
export class ExperiencesService extends ExperiencesData {

  experiences: Experience[] = [
    {
      companyName: "TiSoHa Software Solution",
      position: "Software Engineer",
      startDate: "07/2023",
      endDate: "Present",
      descriptions: [
        "Collaborated with senior developers to create new APIs and resolve business logic issues.",
        "Produced modern, high-performance, and maintainable code for a wide range of client and internal projects.",
        "Engaged in daily meetings, communicating effectively with multidisciplinary teams of engineers, designers, and clients."
      ]
    }
  ]

  override getExperiences(): Observable<Experience[]> {
    return of(this.experiences)
  }

}