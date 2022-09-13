import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { RegisterService } from 'src/app/services/register.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
import { JsonPipe } from '@angular/common';
import { RoleService } from 'src/app/role.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:Login
  constructor(private registerService:RegisterService,private route:RouterService,private roleService:RoleService) {
    this.login= new Login();
   }

  ngOnInit(): void {
  
    // this.gotoLogin();
  }

  userLogin(loginForm:NgForm){

 
    
    this.login = loginForm.value;
    this.registerService.loginUser(this.login).subscribe(res=>{


     
        if(res){
          // Convet from json
          let jsonObject = JSON.stringify(res);
          let jsonToken = JSON.parse(jsonObject);
  
        
          localStorage.setItem('UserToken',jsonToken["Token"]);
          localStorage.setItem('UserEmail',jsonToken['Email']); 
          Swal.fire(
            'User Login',
            'login success',
            'success'
          )
          if(this.roleService.getRole()=='user') this.route.goToMenu();
          else this.route.goToGetAllItems();  
          }
          else{
            
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Invalid Email or Password',
            })

      }    
        

      }
      
    )}
    }
    
    

