import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrviewComponent } from './orview.component';

describe('OrviewComponent', () => {
  let component: OrviewComponent;
  let fixture: ComponentFixture<OrviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
