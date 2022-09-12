import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { RoleService } from 'src/app/role.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token?:string | null;
  constructor(private authService: AuthService,private router:Router,private roleService:RoleService) { 
    
  }

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event.constructor.name == "NavigationEnd"){
        this.token = this.authService.getToken();
        
      }
    
       
    })
  }

  Admin(){
    if(this.roleService.getRole()=='admin'){
      return true;
    }
    else{
      return false;
    }
  }

}
