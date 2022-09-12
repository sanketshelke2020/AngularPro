import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodDish } from 'src/app/models/food-dish';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
dish:FoodDish
  constructor(private admin:AdminService) { 
    this.dish = new FoodDish();
  }

  ngOnInit(): void {
  }
  addDish(loginForm:NgForm){
    this.dish = loginForm.value;
    console.log(this.dish)
    this.admin.addDish(this.dish).subscribe(res=>{
      
      if(res){
        Swal.fire(
          'Added',
          'Dish Added',
          'success'
        )
      }
    })
  }

}
