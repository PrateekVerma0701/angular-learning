import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-if-test',
  template: `
  <h2> Welcome to {{name}} Lecture

  <div *ngIf = "displayName; then thenBlock else elseBlock">
  Codevolution
  </div>

  <ng-template #thenBlock>
    <h2>
      Codevolution
    </h2>
  </ng-template>
  
  <ng-template #elseBlock>
    <h2>
      Name is Hidden
    </h2>
  </ng-template>


  <!-->
  <h2 *ngIf = "displayName; else elseBlock">
  Codevolution
  </h2>

  <ng-template #elseBlock>
    <h2>
      Name is Hidden
    </h2>
  </ng-template>
  <!-->
  `,
  styleUrls: ['./structural-directive-ng-if-test.component.css']
})
export class StructuralDirectiveNgIfTestComponent implements OnInit {

  public name = "Structural Directive - ngIf"

  displayName = false;

  constructor() { }

  ngOnInit() {
  }

}
