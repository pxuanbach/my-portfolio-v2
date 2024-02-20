import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Social, SocialsData } from "./dto/socials";
import SocialsJson from "./db/socials.json";


@Injectable()
export class SocialsService extends SocialsData {
  
  socials: Array<Social> = SocialsJson;

  getSocials(): Observable<Social[]> {
    return of(this.socials)
  }
}