import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodDish } from '../models/food-dish';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor(private httpClient:HttpClient) { }
  GetAllDishes():Observable<FoodDish[]> {
    return this.httpClient.get<FoodDish[]>('https://localhost:7100/api/FoodDish/FoodDish');
  }

  addDish(dish: FoodDish):Observable<string> {
    return this.httpClient.post<string>('https://localhost:7100/api/FoodDish/AddDish',dish)
  }

  removeDish(id:number):Observable<string> {
    return this.httpClient.delete<string>(`https://localhost:7100/api/FoodDish/RemoveDish?id=${id}`)
  }
  GetDishById(id:any) {
    return this.httpClient.get<FoodDish>('https://localhost:7100/api/FoodDish/GetDishById?id='+id);
  }
  updateDish(id: any, dish: FoodDish) {
    return this.httpClient.put<string>('https://localhost:7100/api/FoodDish/EditDish?id='+id,dish);
  }
}
