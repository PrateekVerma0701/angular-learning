import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingTestComponent } from './class-binding-test.component';

describe('ClassBindingTestComponent', () => {
  let component: ClassBindingTestComponent;
  let fixture: ComponentFixture<ClassBindingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBindingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
