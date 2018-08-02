import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMedicalRecordComponent } from './request-medical-record.component';

describe('RequestMedicalRecordComponent', () => {
  let component: RequestMedicalRecordComponent;
  let fixture: ComponentFixture<RequestMedicalRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMedicalRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMedicalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
