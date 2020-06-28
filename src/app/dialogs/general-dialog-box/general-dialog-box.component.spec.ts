import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDialogBoxComponent } from './general-dialog-box.component';

describe('GeneralDialogBoxComponent', () => {
  let component: GeneralDialogBoxComponent;
  let fixture: ComponentFixture<GeneralDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
