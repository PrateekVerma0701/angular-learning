import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-test',
  template: `
  <h2>
   Welcome {{name}}
  </h2>
  <h2>{{2+2}}</h2>
  <h2>{{"Hello, How are you " + name + "?"}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  ` ,
  styleUrls: ['./interpolation-test.component.css']
})
export class InterpolationTestComponent implements OnInit {

  public name = "Prateek"
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greetUser()
  {
    return "Hello " + this.name;
  }

}
