import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewComponent } from './pdf-view.component';
import { PdfViewRoutingModule } from './pdf-view-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfHelperComponent } from './pdf-helper/pdf-helper.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PdfViewRoutingModule,
    PdfViewerModule,
    PdfHelperComponent
  ],
  declarations: [
    PdfViewComponent
  ],
  providers: []
})
export class PdfViewModule { }
