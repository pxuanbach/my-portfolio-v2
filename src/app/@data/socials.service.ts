import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Social, SocialsData } from "./dto/socials";


@Injectable()
export class SocialsService extends SocialsData {
  
  socials: Array<Social> = [
    {
      name: "Github",
      link: "https://github.com/pxuanbach",
      hidden: false
    },
    {
      name: "Gitlab",
      link: "https://gitlab.com/pxuanbach1412",
      hidden: false
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/pham-bach-97a389217/",
      hidden: false
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/pxuanbach/",
      hidden: false
    }
  ] 

  getSocials(): Observable<Social[]> {
    return of(this.socials)
  }
}