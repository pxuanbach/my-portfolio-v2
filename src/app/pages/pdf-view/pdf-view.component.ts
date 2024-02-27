import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PdfService } from '../../@services/pdf.service';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrl: './pdf-view.component.scss'
})
export class PdfViewComponent implements OnInit {

  pdfService: PdfService;

  public base64Src: string = '';

  constructor(
    _pdfService: PdfService
  ) {
    this.pdfService = _pdfService;

    this.pdfService.createPDF((result: string) => {
      this.base64Src = result;
    })
  }
  
  afterLoadComplete() {
    console.log('after-load-complete');
  }

  ngOnInit(): void {

  }
}
