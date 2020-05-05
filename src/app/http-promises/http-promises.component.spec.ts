import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPromisesComponent } from './http-promises.component';

describe('HttpPromisesComponent', () => {
  let component: HttpPromisesComponent;
  let fixture: ComponentFixture<HttpPromisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPromisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
