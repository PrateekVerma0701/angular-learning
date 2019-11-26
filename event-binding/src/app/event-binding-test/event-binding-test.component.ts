import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-test',
  template: `
   <h2>
   Welcome to {{name}}
   </h2>

   <button (click)="onClick1()">Greet 1</button>
   {{greeting1}}

   <button (click)="onClick2($event)">Greet 2</button>
   {{greeting2}}

   <button (click)="greeting3 = 'Welcome Prateek'">Greet 3</button>
   {{greeting3}}
   
  `,
  styleUrls: ['./event-binding-test.component.css']
})
export class EventBindingTestComponent implements OnInit {

  public name = "event binding lecture";
  public greeting1 = "";
  public greeting2 = "";
  public greeting3 = "";

  constructor() { }

  ngOnInit() {
  }

  onClick1()
  {
  console.log("Welcome to codevloution")
  this.greeting1 = "Welcome to codevloution";
  }

  onClick2(event)
  {
  console.log(event)
  this.greeting2 = event.type;
  }
}
