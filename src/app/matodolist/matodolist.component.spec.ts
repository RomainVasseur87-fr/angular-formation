import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatodolistComponent } from './matodolist.component';

describe('MatodolistComponent', () => {
  let component: MatodolistComponent;
  let fixture: ComponentFixture<MatodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatodolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
