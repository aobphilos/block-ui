import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFromOtherComponent } from './request-from-other.component';

describe('RequestFromOtherComponent', () => {
  let component: RequestFromOtherComponent;
  let fixture: ComponentFixture<RequestFromOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestFromOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFromOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
