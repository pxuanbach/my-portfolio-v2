import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill, SkillsData } from './dto/skills';

@Injectable()
export class SkillsService extends SkillsData {
  skills: Skill[] = [
    {
      keyName: 'Python',
      relatedTechs: [
        'FastAPI',
        'SQLAlchemy (ORM)',
        'Pytest',
        'AsyncIO',
      ],
    },
    {
      keyName: 'NodeJS',
      relatedTechs: ['ExpressJS', 'AngularJS', 'Angular', 'MeteorJS', 'NestJS'],
    },
    {
      keyName: 'Database',
      relatedTechs: ['SQL Server', 'PostgreSQL', 'MongoDB'],
    },
    {
      keyName: 'AWS',
      relatedTechs: ['EC2', 'Lightsail', 'S3'],
    },
    {
      keyName: 'Others',
      relatedTechs: [
        'Redis',
        'Docker',
        'Gitlab CI/CD',
        'Github Actions',
        'Linux',
        'Bash',
        'Apache HTTP Server'
      ],
    },
  ];

  override getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }
}
