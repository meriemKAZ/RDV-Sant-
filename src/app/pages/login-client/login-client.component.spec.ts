import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginClientComponent } from './login-client.component';


describe('LoginMedecinComponent', () => {
  let component: LoginClientComponent;
  let fixture: ComponentFixture<LoginClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
