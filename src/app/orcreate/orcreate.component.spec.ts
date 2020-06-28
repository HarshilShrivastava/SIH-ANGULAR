import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcreateComponent } from './orcreate.component';

describe('OrcreateComponent', () => {
  let component: OrcreateComponent;
  let fixture: ComponentFixture<OrcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
