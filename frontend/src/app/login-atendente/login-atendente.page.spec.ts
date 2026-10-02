import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginAtendentePage } from './login-atendente.page';

describe('LoginAtendentePage', () => {
  let component: LoginAtendentePage;
  let fixture: ComponentFixture<LoginAtendentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAtendentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
