import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityReadComponent } from './university-read.component';

describe('UniversityReadComponent', () => {
  let component: UniversityReadComponent;
  let fixture: ComponentFixture<UniversityReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
