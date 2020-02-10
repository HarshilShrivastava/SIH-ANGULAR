import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgcreateComponent } from './orgcreate.component';

describe('OrgcreateComponent', () => {
  let component: OrgcreateComponent;
  let fixture: ComponentFixture<OrgcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
