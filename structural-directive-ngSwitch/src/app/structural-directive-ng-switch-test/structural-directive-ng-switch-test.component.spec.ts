import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgSwitchTestComponent } from './structural-directive-ng-switch-test.component';

describe('StructuralDirectiveNgSwitchTestComponent', () => {
  let component: StructuralDirectiveNgSwitchTestComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgSwitchTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveNgSwitchTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveNgSwitchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
