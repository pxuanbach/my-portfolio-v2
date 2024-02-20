import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill, SkillsData } from './dto/skills';
import SkillsJson from './db/skills.json';


@Injectable()
export class SkillsService extends SkillsData {
  skills: Skill[] = SkillsJson;

  override getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }
}
