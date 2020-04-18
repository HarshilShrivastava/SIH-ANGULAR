import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiviewComponent } from './candiview.component';

describe('CandiviewComponent', () => {
  let component: CandiviewComponent;
  let fixture: ComponentFixture<CandiviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandiviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandiviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
