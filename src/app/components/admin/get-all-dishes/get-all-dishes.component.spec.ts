import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDishesComponent } from './get-all-dishes.component';

describe('GetAllDishesComponent', () => {
  let component: GetAllDishesComponent;
  let fixture: ComponentFixture<GetAllDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
