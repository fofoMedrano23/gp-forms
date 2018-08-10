import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLabinComponent } from './formulario-labin.component';

describe('FormularioLabinComponent', () => {
  let component: FormularioLabinComponent;
  let fixture: ComponentFixture<FormularioLabinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLabinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLabinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
