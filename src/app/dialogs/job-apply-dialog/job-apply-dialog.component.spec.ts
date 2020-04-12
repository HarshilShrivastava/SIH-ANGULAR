import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplyDialogComponent } from './job-apply-dialog.component';

describe('JobApplyDialogComponent', () => {
  let component: JobApplyDialogComponent;
  let fixture: ComponentFixture<JobApplyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
