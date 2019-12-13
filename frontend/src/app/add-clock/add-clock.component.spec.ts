import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClockComponent } from './add-clock.component';

describe('AddClockComponent', () => {
  let component: AddClockComponent;
  let fixture: ComponentFixture<AddClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
