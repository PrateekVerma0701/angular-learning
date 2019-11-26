import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction-test',
  template: `
  <h2> Welcome to {{lectureName}} </h2>
  <h2> {{"Hello " + name}} </h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./component-interaction-test.component.css']
})
export class ComponentInteractionTestComponent implements OnInit {

  public lectureName = "Component Interactive lecture";

  @Input('parentData') public name: string;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent()
  {
    this.childEvent.emit('Hey Codevolution')
  }

}
