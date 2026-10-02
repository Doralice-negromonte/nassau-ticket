import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmitirSenhaPage } from './emitir-senha.page';

describe('EmitirSenhaPage', () => {
  let component: EmitirSenhaPage;
  let fixture: ComponentFixture<EmitirSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitirSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
