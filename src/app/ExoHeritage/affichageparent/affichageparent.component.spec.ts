import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageparentComponent } from './affichageparent.component';

describe('AffichageparentComponent', () => {
  let component: AffichageparentComponent;
  let fixture: ComponentFixture<AffichageparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
