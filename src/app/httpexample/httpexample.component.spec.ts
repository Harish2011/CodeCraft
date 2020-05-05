import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpexampleComponent } from './httpexample.component';

describe('HttpexampleComponent', () => {
  let component: HttpexampleComponent;
  let fixture: ComponentFixture<HttpexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
