import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  

  constructor(private router : Router) { }
  goToMenu(){
    this.router.navigate(['']);
  }
  goToLogin(){
    this.router.navigate(['login']);
  }
  goToLogout(){
    this.router.navigate(['logout'])
  }
  goToCart(){
    this.router.navigate(['cart'])
  }
  goToGetAllItems() {
    this.router.navigate(['admin'])
  }
  goToAddDish() {
    this.router.navigate(['addDish'])
  }
  goToEditDish(id:number){
    this.router.navigate([`editDish/${id}`])
  }

}
