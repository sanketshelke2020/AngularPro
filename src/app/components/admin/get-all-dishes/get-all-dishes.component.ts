import { Component, OnInit } from '@angular/core';
import { FoodDish } from 'src/app/models/food-dish';
import { RoleService } from 'src/app/role.service';
import { AdminService } from 'src/app/services/admin.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-dishes',
  templateUrl: './get-all-dishes.component.html',
  styleUrls: ['./get-all-dishes.component.css']
})
export class GetAllDishesComponent implements OnInit {
  id:any;
  dishes?:FoodDish[];
  constructor(private admin:AdminService,private route:RouterService,private roleService:RoleService) { }

  ngOnInit(): void {
    if(this.roleService.getRole()!="admin") this.route.goToLogin();
    this.admin.GetAllDishes().subscribe(response=>{
      this.dishes=response;
    });
  }

  removeDish(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.admin.removeDish(id).subscribe(response=>{
          if(response){
            this.route.goToGetAllItems();
          }
        });
      
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        window.location.reload();
      }
    })
    
  }

  editDish(dish:FoodDish){
    this.id = dish.dishId;
    this.route.goToEditDish(this.id);
  }
}
