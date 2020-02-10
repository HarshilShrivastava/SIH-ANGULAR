import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobformComponent } from './jobform.component';

describe('JobformComponent', () => {
  let component: JobformComponent;
  let fixture: ComponentFixture<JobformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
