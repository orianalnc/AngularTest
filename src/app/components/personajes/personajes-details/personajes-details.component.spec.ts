import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesDetailsComponent } from './personajes-details.component';

describe('PersonajesDetailsComponent', () => {
  let component: PersonajesDetailsComponent;
  let fixture: ComponentFixture<PersonajesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajesDetailsComponent]
    });
    fixture = TestBed.createComponent(PersonajesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
