import { Observable } from 'rxjs';

export interface Skill {
  keyName: string;
  relatedTechs: string[];   // frameworks and libraries
}

export abstract class SkillsData {
  abstract getSkills(): Observable<Skill[]>;
}