import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  template: `
  <h2>
  Welcome to {{name}} Lecture
  </h2>
  <input #myInput type="text">
  <button (click)="logMessage1(myInput.value)">Log</button>

  <input myInput type="text">
  <button (click)="logMessage2(myInput)">Log</button>
  `,
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

  public name = "Template Reference"

  constructor() { }

  ngOnInit() {
  }

  logMessage1(value)
  {
    console.log(value);
  }

  logMessage2(value)
  {
    console.log(value);
  }
}
