import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Experience, ExperiencesData } from "./dto/experiences";
import ExperiencesJson from './db/experiences.json';


@Injectable()
export class ExperiencesService extends ExperiencesData {

  experiences: Experience[] = ExperiencesJson;

  override getExperiences(): Observable<Experience[]> {
    return of(this.experiences)
  }

}