import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMedecinComponent } from './calendar-medecin.component';

describe('CalendarMedecinComponent', () => {
  let component: CalendarMedecinComponent;
  let fixture: ComponentFixture<CalendarMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarMedecinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
