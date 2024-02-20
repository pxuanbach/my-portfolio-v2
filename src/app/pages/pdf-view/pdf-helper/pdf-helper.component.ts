import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pdf-helper-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pdf-helper.component.html',
  styleUrl: './pdf-helper.component.scss'
})
export class PdfHelperComponent implements OnInit {

  @Input() appForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appForm = this.fb.group({
      search: ''
    })
  }

  ngxOnSubmit() {

  }
}
