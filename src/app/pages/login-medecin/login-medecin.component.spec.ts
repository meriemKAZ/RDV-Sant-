import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginMedecinComponent } from './login-medecin.component';


describe('LoginMedecinComponent', () => {
  let component: LoginMedecinComponent;
  let fixture: ComponentFixture<LoginMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginMedecinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
