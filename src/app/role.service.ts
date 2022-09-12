import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import jwt_decode from 'jwt-decode';
import { RouterService } from './services/router.service';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private authService:AuthService,private route:RouterService) { }
  getRole(){
    let token = this.authService.getToken();
    if(token==null){
      this.route.goToLogin();
    }
    let decoded = jwt_decode(token || '{}');
    let decodeString = JSON.stringify(decoded);
    let decodeToken = JSON.parse(decodeString);
    return decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }
}
