import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgIfTestComponent } from './structural-directive-ng-if-test.component';

describe('StructuralDirectiveNgIfTestComponent', () => {
  let component: StructuralDirectiveNgIfTestComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgIfTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveNgIfTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveNgIfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
