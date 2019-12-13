import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewClockComponent } from './list-view-clock.component';

describe('ListViewClockComponent', () => {
  let component: ListViewClockComponent;
  let fixture: ComponentFixture<ListViewClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
