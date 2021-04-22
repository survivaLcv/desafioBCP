import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAgenciaComponent } from './detalle-agencia.component';

describe('DetalleAgenciaComponent', () => {
  let component: DetalleAgenciaComponent;
  let fixture: ComponentFixture<DetalleAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
