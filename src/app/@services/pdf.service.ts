import { Injectable } from "@angular/core";
import { forkJoin } from "rxjs";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import { SocialsService } from "../@data/socials.service";
import { BasicDetailService } from "../@data/basic-detail.service";

import { BasicDetail } from "../@data/dto/basic-detail";
import { Social } from "../@data/dto/socials";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Injectable({ providedIn: 'root' })
export class PdfService {

  styles: any = {}
  content: Array<any> = []

  constructor(
    private basicDetailService: BasicDetailService,
    private socialsService: SocialsService
  ) { 
    forkJoin([
      this.basicDetailService.getBasicDetail(),
      this.socialsService.getSocials()
    ])
      .pipe()
      .subscribe(([basicDetail, socials]: [BasicDetail, Social[]]) => {
        this.content = [
          {
            text: basicDetail.name,
            style: 'h1'
          },
          {
            text: basicDetail.email,
            style: 'normalText',
            alignment: 'justify'
          }
        ]
      })
    
    this.styles = {
      h1: {
        fontSize: 18,
        bold: true
      },
      normalText: {
        fontSize: 12,
        fillOpacity: 0.8
      }
    }
  }

  createPDF(callback: any) {
    const docDefinition: any = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [ 30, 30 ],  // [left, top, right, bottom] or [horizontal, vertical]
      content: this.content,
      styles: this.styles
    }
    console.log("🚀 ~ PdfService ~ createPDF ~ docDefinition:", docDefinition)

    pdfMake.createPdf(docDefinition)
      .getBase64(callback);
  }
}