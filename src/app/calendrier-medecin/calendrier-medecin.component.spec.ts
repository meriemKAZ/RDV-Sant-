import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinCalendarComponent } from './calendrier-medecin.component';

describe('CalendrierMedecinComponent', () => {
  let component: MedecinCalendarComponent;
  let fixture: ComponentFixture<MedecinCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedecinCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedecinCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});