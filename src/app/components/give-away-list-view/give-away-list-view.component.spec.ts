import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveAwayListViewComponent } from './give-away-list-view.component';

describe('GiveAwayListViewComponent', () => {
  let component: GiveAwayListViewComponent;
  let fixture: ComponentFixture<GiveAwayListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveAwayListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveAwayListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
