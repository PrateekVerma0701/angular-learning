import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-test',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <input  [id]="myId" type="text" value="Prateek">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Prateek">
  <!-- OR -->
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Prateek">
  `,
  styleUrls: ['./property-test.component.css']
})
export class PropertyTestComponent implements OnInit {

  public name = "Ankit";
  public myId = "testId";
  public isDisabled="true";

  constructor() { }

  ngOnInit() {
  }

}
