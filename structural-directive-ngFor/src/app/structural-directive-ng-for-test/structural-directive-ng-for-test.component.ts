import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-for-test',
  template: `
  <h2>Welcome to {{name}}</h2>

  <div *ngFor="let color of colors">
  <h2>{{color}}</h2>
  </div>

  <h2> Printing along with index </h2>

  <div *ngFor="let color of colors; index as i">
  <h2>{{i}} {{color}}</h2>
  </div>

  <h2> Printing along with odd iteration </h2>

  <div *ngFor="let color of colors; odd as o">
  <h2>{{o}} {{color}}</h2>
  </div>

  <h2> Printing along with even iteration </h2>

  <div *ngFor="let color of colors; even as e">
  <h2>{{e}} {{color}}</h2>
  </div>



  `,
  styleUrls: ['./structural-directive-ng-for-test.component.css']
})
export class StructuralDirectiveNgForTestComponent implements OnInit {

  public name = "Structural directive - ngFor lecture"

  public colors = ["red","blue","green","yellow"];

  constructor() { }

  ngOnInit() {
  }

}
