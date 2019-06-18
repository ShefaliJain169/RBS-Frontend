import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';


@NgModule({
    declarations: [
AppComponent,
],
imports: [
BrowserModule,
FormsModule,
HttpClientModule,
EmployeeModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
