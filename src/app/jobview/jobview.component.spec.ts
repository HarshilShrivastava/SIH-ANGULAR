import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobviewComponent } from './jobview.component';

describe('JobviewComponent', () => {
  let component: JobviewComponent;
  let fixture: ComponentFixture<JobviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
