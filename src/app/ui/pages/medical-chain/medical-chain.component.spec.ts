import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalChainComponent } from './medical-chain.component';

describe('MedicalChainComponent', () => {
  let component: MedicalChainComponent;
  let fixture: ComponentFixture<MedicalChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
