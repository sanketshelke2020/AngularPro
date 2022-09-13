import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Cart } from 'src/app/models/cart';
import { FoodDish } from 'src/app/models/food-dish';
import { CartService } from 'src/app/services/cart.service';
import { FoodDishService } from 'src/app/services/food-dish.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-food-dishes',
  templateUrl: './food-dishes.component.html',
  styleUrls: ['./food-dishes.component.css']
})
export class FoodDishesComponent implements OnInit {
  dishes?:FoodDish[];
  cartObj:Cart;
  constructor(private foodDish:FoodDishService,private authService:AuthService,private cartService:CartService,private route:RouterService) { 
    this.cartObj = new Cart();
  }

  ngOnInit(): void {
    this.foodDish.GetAllDishes().subscribe(response=>{
      this.dishes=response;
    });
  }
  AddToCart(dish:FoodDish){
      this.cartObj.dishName = dish.dishName;
      this.cartObj.email = this.authService.getEmail() as string;
      this.cartObj.quantity = 1;
      this.cartObj.price = dish.price;
      this.cartObj.imagePath = dish.imagePath;

      this.cartService.addToCart(this.cartObj).subscribe(res=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Added To Cart',
          showConfirmButton: false,
          timer: 1500
        })
      })
      


  }

}
