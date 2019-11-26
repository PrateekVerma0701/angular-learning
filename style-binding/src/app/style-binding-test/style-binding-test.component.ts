import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding-test',
  template: `
  <h2>
   Welcome {{name}}
   </h2>
   <h2 [style.color]="'orange'">Style Binding 1</h2>
   <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h2>
   <h2 [style.color]="highLightColor">Style Binding 3</h2>
   <h2 [ngStyle] = "titleStyles">Style Binding 4</h2>
  `,
  styleUrls: ['./style-binding-test.component.css']
})
export class StyleBindingTestComponent implements OnInit {
  public name = "Codevolution";
  public hasError = false;
  public highLightColor = "magenta"

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  

  constructor() { }

  ngOnInit() {
  }

}
