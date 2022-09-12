import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { RoleService } from 'src/app/role.service';
import { CartService } from 'src/app/services/cart.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css']
})
export class DisplayCartComponent implements OnInit {
cartItems:any;
total:number=0;


  constructor(private cartService:CartService,private routeService: RouterService) {
   }

  ngOnInit(): void {
    this.cartService.GetCartByEmail().subscribe(response=>{
      this.cartItems=response;
      
      this.cartItems.forEach((element:any) => {
        this.total += (element.price!)*(element.quantity!) ;
      });
            
    });
  }
  
  removeCartItem(orderId:any){
    this.cartService.removeCartItem(orderId).subscribe(response=>{
      if(response){
        // Swal.fire({
        //   position: 'top-end',
        //   icon: 'success',
        //   title: 'Item Removed From Cart',
        //   showConfirmButton: false,
        //   timer: 1500
        // })
        window.location.reload();
      }
      
    })
  }

  SubtractItem(cart:Cart){
    this.cartService.SubtractItem(cart).subscribe(response=>{
      
      if(response){
        // Swal.fire({
        //   position: 'top-end',
        //   icon: 'success',
        //   title: 'Quantity updated',
        //   showConfirmButton: false,
        //   timer: 15
        // })
        window.location.reload();
      }
      
    })
  }

  AddingItem(cart:Cart){
    this.cartService.AddingItem(cart).subscribe(response=>{
      
      if(response){
        // Swal.fire({
        //   position: 'top-end',
        //   icon: 'success',
        //   title: 'Quantity Updated',
        //   showConfirmButton: false,
        //   timer: 1500
        // })
        
        window.location.reload();
      }
      
    })
  }

}
