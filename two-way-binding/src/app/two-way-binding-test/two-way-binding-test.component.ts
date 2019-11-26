import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-test',
  template: `
  <h2>
  Welcome to  {{name}} Lecture
  </h2>
  Username: 
  <input [(ngModel)]="username" type="text">
  Usrename entered is {{username}}
  `,
  styleUrls: ['./two-way-binding-test.component.css']
})
export class TwoWayBindingTestComponent implements OnInit {

  public name = "Two Way Binding";
  public username = "";

  constructor() { }

  ngOnInit() {
  }

}
