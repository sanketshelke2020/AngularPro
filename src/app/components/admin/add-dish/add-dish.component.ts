import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoutesRecognized } from '@angular/router';
import { FoodDish } from 'src/app/models/food-dish';
import { AdminService } from 'src/app/services/admin.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
dish:FoodDish
  constructor(private admin:AdminService,private route:RouterService) { 
    this.dish = new FoodDish();
  }

  ngOnInit(): void {
  }
  addDish(loginForm:NgForm){
    this.dish = loginForm.value;
    console.log(this.dish)
    this.admin.addDish(this.dish).subscribe(
      (res)=>{
        Swal.fire(
                  'Added',
                  'Dish Added',
                  'success'
                
                )
                this.route.goToGetAllItems();
              },
                (e)=>{
                  Swal.fire({
                    icon: 'error',
                    title: 'Dish Exists',
                    text: 'Food Dish Exists',
                  })
                }
              )}

}
