import { Component, OnInit } from '@angular/core';
import { FoodDish } from 'src/app/models/food-dish';
import { FoodDishService } from 'src/app/services/food-dish.service';

@Component({
  selector: 'app-food-dish',
  templateUrl: './food-dish.component.html',
  styleUrls: ['./food-dish.component.css']
})
export class FoodDishComponent implements OnInit {
  dishes?:FoodDish[];
  constructor(private foodDish:FoodDishService) { }

  ngOnInit(): void {
    this.foodDish.GetAllDishes().subscribe(response=>{
      this.dishes=response;
    });
    
  }

}
