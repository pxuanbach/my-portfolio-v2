import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  name: string = "Bach Pham"

  country: string = "Vietnam"

  phone_number: string = "(+84) 37*****85"

  about_me: string = ""

  socials: Array<any> = [
    {
      name: "Gmail",
      link: "mailto:pxuanbach.dev@gmail.com",
      hidden: false
    },
    {
      name: "Github",
      link: "https://github.com/pxuanbach",
      hidden: false
    },
    {
      name: "Gitlab",
      link: "https://gitlab.com/pxuanbach1412",
      hidden: false
    }
  ] 

  educations: Array<any> = []

  experiences: Array<any> = []

  projects: Array<any> = []


}
