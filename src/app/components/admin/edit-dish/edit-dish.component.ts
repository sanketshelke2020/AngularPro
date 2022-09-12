import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { FoodDish } from 'src/app/models/food-dish';
import { AdminService } from 'src/app/services/admin.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {
  id:any;
  dish:FoodDish;
  constructor(private route:ActivatedRoute,private adminService:AdminService,private routeService:RouterService) {

    this.id =this.route.snapshot.paramMap.get('id');
    this.dish = new FoodDish();
   }
  ngOnInit(): void {
    this.adminService.GetDishById(this.id).subscribe(response=>{
      console.log(response);
      
      
      this.dish = response;
    });
  }

  updateDish(loginForm:NgForm){
    // this.dish = loginForm.value;
    this.adminService.updateDish(this.id,this.dish).subscribe(res=>{
      if(res){
        Swal.fire(
          'Food Dish Updated',
          'Updated!',
          'success'
        )
        this.routeService.goToGetAllItems();
      }
      
    })
  }

}
