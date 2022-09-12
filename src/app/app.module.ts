import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './components/register/register.component';

import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FoodDishComponent } from './components/food-dish/food-dish.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { FoodDishService } from './services/food-dish.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { AddFoodDishComponent } from './components/foodDish/add-food-dish/add-food-dish.component';
import { FoodDishesComponent } from './components/foodDish/food-dishes/food-dishes.component';
import { DisplayCartComponent } from './components/cart/display-cart/display-cart.component';
import {MatTableModule} from '@angular/material/table';
import { GetAllDishesComponent } from './components/admin/get-all-dishes/get-all-dishes.component';
import { AddDishComponent } from './components/admin/add-dish/add-dish.component';
import { EditDishComponent } from './components/admin/edit-dish/edit-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    FoodDishComponent,
    LoginComponent,
    LogoutComponent,
    AddFoodDishComponent,
    FoodDishesComponent,
    DisplayCartComponent,
    GetAllDishesComponent,
    AddDishComponent,
    EditDishComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule ,
     

  ],
  providers: [AuthService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
