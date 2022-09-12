import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodDish } from '../models/food-dish';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodDishService {
  
private url = "https://localhost:7100/api/FoodDish/FoodDish";
  constructor(private httpClient:HttpClient) { 
    this.httpClient= httpClient;
  }
  GetAllDishes():Observable<FoodDish[]> {
    return this.httpClient.get<FoodDish[]>(this.url)
  }
}
