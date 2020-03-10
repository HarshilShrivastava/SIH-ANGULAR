import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProfileComponent } from './select-profile.component';

describe('SelectProfileComponent', () => {
  let component: SelectProfileComponent;
  let fixture: ComponentFixture<SelectProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
