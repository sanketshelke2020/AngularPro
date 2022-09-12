import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddDishComponent } from './components/admin/add-dish/add-dish.component';
import { EditDishComponent } from './components/admin/edit-dish/edit-dish.component';
import { GetAllDishesComponent } from './components/admin/get-all-dishes/get-all-dishes.component';
import { DisplayCartComponent } from './components/cart/display-cart/display-cart.component';
import { FoodDishComponent } from './components/food-dish/food-dish.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { FoodDish } from './models/food-dish';
import { Register } from './models/register';

const routes: Routes = [
  { path: '', component: FoodDishComponent,canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'cart', component: DisplayCartComponent,canActivate:[AuthGuard] },
  { path: 'admin', component: GetAllDishesComponent,canActivate:[AuthGuard] },
  { path: 'addDish', component: AddDishComponent },
  { path: 'editDish/:id', component: EditDishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
