
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { EmployeeListComponent } from './shared/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/configuration/employee/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './components/configuration/employee/view-employees/view-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    ViewEmployeesComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    PrimeNgModule,
    ReactiveFormsModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
