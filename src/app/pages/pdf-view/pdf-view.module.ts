import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewComponent } from './pdf-view.component';
import { PdfViewRoutingModule } from './pdf-view-routing.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfService } from '../../@services';
import { BasicDetailService } from '../../@data/basic-detail.service';
import { EducationsService } from '../../@data/educations.service';
import { SkillsService } from '../../@data/skills.service';
import { ExperiencesService } from '../../@data/experiences.service';
import { ProjectsService } from '../../@data/projects.service';
import { PersonalProjectsService } from '../../@data/personal-projects.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PdfViewRoutingModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [
    PdfViewComponent
  ],
  providers: [
    PdfService,
    BasicDetailService,
    EducationsService,
    SkillsService,
    ExperiencesService,
    ProjectsService,
    PersonalProjectsService
  ]
})
export class PdfViewModule { }
