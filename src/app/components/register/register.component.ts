import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register:Register;
// loginForm:FormGroup
  constructor(private registerService:RegisterService,private route:RouterService) {
    this.register = new Register();
    // this.loginForm = this.formBuilder.group({
    //   name:['',Validators.compose([Validators.required,Validators.minLength(2)])],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    //   contactNo: ['', Validators.required],
    //   address: ['', Validators.required],

    // });
   }

  ngOnInit(): void {
    
  }
  registerUser(loginForm:NgForm){    
    this.register=loginForm.value;
    this.registerService.RegisterUser(this.register).subscribe(res=>{
    if(res){
      Swal.fire(
        'User Register',
        'Register success',
        'success'
      )
      this.route.goToLogin();
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User Already Exists',
      })
      
    }
    
  })
  }
}
