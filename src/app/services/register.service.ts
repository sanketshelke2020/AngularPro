import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  registerUrl:string = `${environment.userUrl}/Register`;

  loginUrl:string = "https://localhost:7236/api/User/Login";

  constructor(private httpClient: HttpClient) {
   }
   RegisterUser(register:Register):Observable<string> {
    return this.httpClient.post<string>(this.registerUrl,register);
  }

   loginUser(login: Login):Observable<string> {
        return this.httpClient.post<string>(this.loginUrl,login);
  }


   
}
