import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { AddEmployeeComponent } from './components/configuration/employee/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './components/configuration/employee/view-employees/view-employees.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'add-employee', component: AddEmployeeComponent
  },
  {
    path: 'view-employees', component: ViewEmployeesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
