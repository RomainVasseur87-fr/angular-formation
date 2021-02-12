import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEnfantComponent } from './formulaire-enfant.component';

describe('FormulaireEnfantComponent', () => {
  let component: FormulaireEnfantComponent;
  let fixture: ComponentFixture<FormulaireEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
