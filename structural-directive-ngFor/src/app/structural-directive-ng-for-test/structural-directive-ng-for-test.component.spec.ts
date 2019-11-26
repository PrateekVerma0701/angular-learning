import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgForTestComponent } from './structural-directive-ng-for-test.component';

describe('StructuralDirectiveNgForTestComponent', () => {
  let component: StructuralDirectiveNgForTestComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgForTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveNgForTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveNgForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
