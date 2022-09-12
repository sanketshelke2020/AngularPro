import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDishComponent } from './food-dish.component';

describe('FoodDishComponent', () => {
  let component: FoodDishComponent;
  let fixture: ComponentFixture<FoodDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
