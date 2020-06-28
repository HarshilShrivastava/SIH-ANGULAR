import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsAppliedComponent } from './jobs-applied.component';

describe('JobsAppliedComponent', () => {
  let component: JobsAppliedComponent;
  let fixture: ComponentFixture<JobsAppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsAppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
