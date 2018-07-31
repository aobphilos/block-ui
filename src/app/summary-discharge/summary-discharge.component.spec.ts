import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDischargeComponent } from './summary-discharge.component';

describe('SummaryDischargeComponent', () => {
  let component: SummaryDischargeComponent;
  let fixture: ComponentFixture<SummaryDischargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryDischargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
