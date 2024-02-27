import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewComponent } from './pdf-view.component';
import { PdfViewRoutingModule } from './pdf-view-routing.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfService } from '../../@services';
import { BasicDetailService } from '../../@data/basic-detail.service';
import { SocialsService } from '../../@data/socials.service';


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
    SocialsService,
  ]
})
export class PdfViewModule { }
