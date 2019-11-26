import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindingTestComponent } from './style-binding-test.component';

describe('StyleBindingTestComponent', () => {
  let component: StyleBindingTestComponent;
  let fixture: ComponentFixture<StyleBindingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleBindingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
