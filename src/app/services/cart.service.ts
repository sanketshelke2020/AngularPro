import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  

  constructor(private httpClient:HttpClient,private authService:AuthService) { 
    this.httpClient = httpClient;
    
  }


addToCart(cartObj:Cart):Observable<string>{
  return this.httpClient.post<string>('https://localhost:7235/api/Order',cartObj)
}
GetCartByEmail():Observable<Cart[]> {
  let email = this.authService.getEmail() as string;
  return this.httpClient.get<Cart[]>(`https://localhost:7235/api/Order/GetOrdersByEmail?email=${email}`);  
}
removeCartItem(orderId:any):Observable<string> {
  return this.httpClient.delete<string>(`https://localhost:7235/api/Order?id=${orderId}`)
}
SubtractItem(cart:Cart):Observable<string> {
  return this.httpClient.put<string>('https://localhost:7235/api/Order/SubtractItem',cart);
}
AddingItem(cart:Cart):Observable<string> {
  return this.httpClient.put<string>('https://localhost:7235/api/Order/AddingItem',cart);
}

// GetAllDishes():Observable<FoodDish[]> {
//   return this.httpClient.get<FoodDish[]>(this.url)
// }
// RegisterUser(register:Register):Observable<string> {
//   return this.httpClient.post<string>(this.registerUrl,register);
// }
}