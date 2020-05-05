import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRestFormComponent } from './submit-rest-form.component';

describe('SubmitRestFormComponent', () => {
  let component: SubmitRestFormComponent;
  let fixture: ComponentFixture<SubmitRestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitRestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
