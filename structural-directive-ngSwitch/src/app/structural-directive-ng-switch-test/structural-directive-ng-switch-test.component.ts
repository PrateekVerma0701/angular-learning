import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-switch-test',
  template: `
  <h2> Welcome to {{name}}</h2>
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefault>Pick Again !!!</div>
  </div>
  
  `,
  styleUrls: ['./structural-directive-ng-switch-test.component.css']
})
export class StructuralDirectiveNgSwitchTestComponent implements OnInit {

  public name = "Structural Directive ngSwtich lecture";

  public color = "yellow ";

  constructor() { }

  ngOnInit() {
  }

}
