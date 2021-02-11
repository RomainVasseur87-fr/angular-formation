import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocorrectionComponent } from './todocorrection.component';

describe('TodocorrectionComponent', () => {
  let component: TodocorrectionComponent;
  let fixture: ComponentFixture<TodocorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodocorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
