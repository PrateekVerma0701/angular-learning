import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionTestComponent } from './component-interaction-test.component';

describe('ComponentInteractionTestComponent', () => {
  let component: ComponentInteractionTestComponent;
  let fixture: ComponentFixture<ComponentInteractionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteractionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
