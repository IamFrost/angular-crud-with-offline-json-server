import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOneComponent } from './create-one.component';

describe('CreateOneComponent', () => {
  let component: CreateOneComponent;
  let fixture: ComponentFixture<CreateOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
