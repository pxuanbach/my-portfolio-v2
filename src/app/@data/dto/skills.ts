import { Observable } from 'rxjs';

export interface Skill {
  keyName: string;
  relatedTechs: RelatedTech[];   // frameworks and libraries
}

interface RelatedTech {
  name: string;
  level?: number;
}

export abstract class SkillsData {
  abstract getSkills(): Observable<Skill[]>;
}