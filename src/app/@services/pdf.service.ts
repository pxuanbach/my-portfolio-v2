import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { environment } from '../../environments/environment';

import { EducationsService } from '../@data/educations.service';
import { BasicDetailService } from '../@data/basic-detail.service';
import { ExperiencesService } from '../@data/experiences.service';
import { SkillsService } from '../@data/skills.service';
import { ProjectsService } from '../@data/projects.service';

import { BasicDetail } from '../@data/dto/basic-detail';
import { Education } from '../@data/dto/educations';
import { Experience } from '../@data/dto/experiences';
import { Skill } from '../@data/dto/skills';
import { Project } from '../@data/dto/projects';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Injectable({ providedIn: 'root' })
export class PdfService {
  styles: any = {};
  content: Array<any> = [];
  outlineMarginTop: number = 6;
  sectionMarginBottom: number = 6;
  heading1LineHeight: number = 1.2;
  heading2LineHeight: number = 1.2;
  heading3LineHeight: number = 1.2;
  normalTextLineHeight: number = 1.1;

  constructor(
    private basicDetailService: BasicDetailService,
    private educationsService: EducationsService,
    private experiencesService: ExperiencesService,
    private skillsService: SkillsService,
    private projectsService: ProjectsService
  ) {
    this.outlineMarginTop = environment.pdfOutlineMarginTop;
    this.sectionMarginBottom = environment.pdfSectionMarginBottom;
    this.heading1LineHeight = environment.pdfHeading1LineHeight;
    this.heading2LineHeight = environment.pdfHeading2LineHeight;
    this.heading3LineHeight = environment.pdfHeading3LineHeight;
    this.normalTextLineHeight = environment.pdfNormalTextLineHeight;
    forkJoin([
      this.basicDetailService.getBasicDetail(),
      this.educationsService.getEducations(),
      this.experiencesService.getExperiences(),
      this.skillsService.getSkills(),
      this.projectsService.getProjects()
    ])
      .pipe()
      .subscribe(
        ([basicDetail, educations, experiences, skills, projects]: [
          BasicDetail,
          Education[],
          Experience[],
          Skill[],
          Project[]
        ]) => {
          this.content = [
            {
              nodeName: 'Intro',
              stack: this.generateIntroSection(basicDetail),
            },
            {
              nodeName: 'Education',
              stack: this.generateEducationSection(educations),
            },
            {
              nodeName: 'Skills',
              stack: this.generateTechnicalSkillsSection(skills),
            },
            {
              nodeName: 'Experience',
              stack: this.generateExperienceSection(experiences),
            },
            {
              nodeName: 'Projects',
              stack: this.generateProjectsSection(projects),
            },
          ];
        }
      );

    this.styles = this.generateStyles();
  }

  //#region Generate content section
  generateIntroSection(basicDetail: BasicDetail) {
    const temp = [
      {
        text: basicDetail.name,
        style: 'h1',
      }
    ]

    if (basicDetail.email !== '') {
      temp.push({
        text: basicDetail.email,
        style: 'normalText',
      })
    }

    if (basicDetail.country !== '') {
      temp.push({
        text: basicDetail.country,
        style: 'normalText',
      })
    }

    return temp;
  }

  generateEducationSection(educations: Education[]) {
    const temp: Array<any> = [this.outlineTitle('education'), this.separator()];

    educations.forEach((edu) => {
      temp.push({
        margin: [0, 0, 0, this.sectionMarginBottom],
        style: 'normalText',
        stack: [
          {
            columns: [
              {
                width: '*',
                alignment: 'left',
                stack: [
                  {
                    text: edu.name,
                    style: 'h3',
                  },
                ],
              },
              {
                width: 150,
                alignment: 'right',
                stack: [
                  {
                    text: edu.startDate + ' - ' + edu.endDate,
                    style: 'h3',
                  },
                ],
              },
            ],
          },
          {
            text: edu.major.toUpperCase(),
          },
          {
            text: 'GPA: ' + edu.gpa + '/' + edu.maxGpa,
          },
        ],
      });
    });

    return temp;
  }

  generateExperienceSection(experiences: Experience[]) {
    const temp: Array<any> = [this.outlineTitle('experience'), this.separator()];

    experiences.forEach((exp) => {
      temp.push({
        margin: [0, 0, 0, this.sectionMarginBottom],
        style: 'normalText',
        stack: [
          {
            columns: [
              {
                width: '*',
                alignment: 'left',
                stack: [
                  {
                    text: [
                      exp.companyName + ', ',
                      {
                        text: exp.position,
                        italics: true,
                      },
                    ],
                    style: 'h3',
                  },
                ],
              },
              {
                width: 150,
                alignment: 'right',
                stack: [
                  {
                    text: exp.startDate + ' - ' + exp.endDate,
                    style: 'h3',
                  },
                ],
              },
            ],
          },
          {
            ul: exp.descriptions,
          },
        ],
      });
    });

    return temp;
  }

  generateTechnicalSkillsSection(skills: Skill[]) {
    const temp: any = [this.outlineTitle('technical Skills'), this.separator()];

    skills.forEach((skill) => {
      temp.push({
        style: 'normalText',
        stack: [
          {
            text: [
              {
                text: skill.keyName + ': ',
                style: 'h3'
              }, 
              {
                text: skill.relatedTechs?.length > 0 ? skill.relatedTechs.map(tech => tech.name).join(', ') + '.' : '',
              }
            ]
          },
        ],
      });
    });
    temp.push({
      margin: [0, 0, 0, this.sectionMarginBottom],
      style: 'nomalText',
      stack: []
    })
    return temp;
  }

  generateProjectsSection(projects: Project[]) {
    const temp: Array<any> = [this.outlineTitle('projects'), this.separator()];
    
    projects.forEach(proj => {
      temp.push({
        margin: [0, 0, 0, this.sectionMarginBottom],
        style: 'normalText',
        stack: [
          {
            columns: [
              {
                width: '*',
                alignment: 'left',
                stack: [
                  {
                    text: [
                      proj.name + ', ',
                      {
                        text: proj.myRole,
                        italics: true,
                      },
                    ],
                    style: 'h3',
                  },
                ],
              },
              {
                width: 150,
                alignment: 'right',
                stack: [
                  {
                    text: proj.startDate + ' - ' + proj.endDate,
                    style: 'h3',
                  },
                ],
              },
            ],
          },
          {
            text: this.htmlText(proj.shortDes),
            italics: true,
          },
          {
            stack: [
              {
                text: 'Responsibilities: ',
                bold: true
              },
              {
                ul: proj.descriptions,
              }
            ]
          },
          {
            text: [
              {
                text: 'Technologies: ',
                bold: true
              },
              proj.keyTechs.join(', ')
            ]
          },
          {
            text: [
              {
                text: 'Team size: ',
                bold: true
              },
              proj.teamsize
            ]
          }
        ]
      })
    })

    return temp;
  }
  //#endregion

  //#region Custome content component
  outlineTitle(title: string) {
    return {
      text: [
        title[0].toUpperCase(),
        {
          text: title.slice(1),
          color: '#000',
        },
      ],
      style: 'h2',
      color: '#267CB9',
      margin: [0, this.outlineMarginTop, 0, 0],
    };
  }

  separator() {
    return {
      nodeName: 'separator',
      margin: [0, 0, 0, 8],
      width: '*',
      canvas: [
        {
          type: 'line',
          x1: 0,
          y1: 0,
          x2: 535,
          y2: 0,
          lineWidth: 0.5,
          lineColor: '#000000',
        },
      ],
    };
  }

  htmlText(html: string) {
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || "";
    return text;
  }
  //#endregion

  generateStyles() {
    return {
      h1: {
        fontSize: environment.pdfH1FontSize,
        bold: true,
        lineHeight: this.heading1LineHeight,
      },
      h2: {
        fontSize: environment.pdfH2FontSize,
        bold: true,
        lineHeight: this.heading2LineHeight,
      },
      h3: {
        fontSize: environment.pdfNormalFontSize,
        bold: true,
        lineHeight: this.heading3LineHeight,
        color: '#494949',
      },
      normalText: {
        fontSize: environment.pdfNormalFontSize,
        lineHeight: this.normalTextLineHeight,
        alignment: 'justify',
        color: '#666666',
      },
    };
  }

  public createPDF(callback: any) {
    const docDefinition: any = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [30, 30], // [left, top, right, bottom] or [horizontal, vertical]
      content: this.content,
      styles: this.styles,
    };
    // console.log('🚀 ~ PdfService ~ createPDF ~ docDefinition:', docDefinition);

    pdfMake.createPdf(docDefinition).getBase64(callback);
  }
}
