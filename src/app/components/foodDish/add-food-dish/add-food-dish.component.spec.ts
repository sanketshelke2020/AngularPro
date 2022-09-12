import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodDishComponent } from './add-food-dish.component';

describe('AddFoodDishComponent', () => {
  let component: AddFoodDishComponent;
  let fixture: ComponentFixture<AddFoodDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoodDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
