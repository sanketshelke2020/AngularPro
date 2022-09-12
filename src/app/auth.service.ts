import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getToken(){
      
    return  localStorage.getItem("UserToken");    
  }
  getEmail(){
    return  localStorage.getItem("UserEmail");  
  }
}
