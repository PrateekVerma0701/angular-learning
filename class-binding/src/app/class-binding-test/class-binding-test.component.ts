import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding-test',
  template: `
  <h2>
   Welcome {{name}}
   </h2>
   <h2 class="text-success">Codevolution</h2>
   <h2 [class]="successClass">Codevolution</h2>
   <h2 class="text-special "[class]="successClass">Codevolution</h2>
   <h2 [class.text-danger]="hassError">Codevolution</h2>
   <h2 [class.text-danger]="hassError2">Codevolution</h2>

   <h2 [ngClass]="messageClasses">Codevolution</h2>
  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red
  }
  .text-special{
    font-style: italic
  }
  `]
})
export class ClassBindingTestComponent implements OnInit {

  public name = "Codevolution";
  public successClass = "text-success"
  public hassError = false;
  public isSpecial = true;
  public hassError2 = false;

  public messageClasses = {
    "text-success": !this.hassError,
    "text-danger": this.hassError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
