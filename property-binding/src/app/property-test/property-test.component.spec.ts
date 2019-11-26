import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTestComponent } from './property-test.component';

describe('PropertyTestComponent', () => {
  let component: PropertyTestComponent;
  let fixture: ComponentFixture<PropertyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
