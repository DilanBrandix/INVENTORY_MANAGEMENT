import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './Component/header/header.component';
import { AssignInventoryComponent } from './Component/assign-inventory/assign-inventory.component';
import { InventoryDetailsComponent } from './Component/inventory-details/inventory-details.component';
import { InventoryInTimeComponent } from './Component/inventory-in-time/inventory-in-time.component';
import { InventoryOutTimeComponent } from './Component/inventory-out-time/inventory-out-time.component';
import { AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './Component/login/login.component';
import { AttendanceComponent } from './Component/attendance/attendance.component';
import { UpdateAssignedInventoryComponent } from './Component/update-assigned-inventory/update-assigned-inventory.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateAttendanceComponent } from './Component/update-attendance/update-attendance.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssignInventoryComponent,
    InventoryDetailsComponent,
    InventoryInTimeComponent,
    InventoryOutTimeComponent,
    LoginComponent,
    AttendanceComponent,
    UpdateAssignedInventoryComponent,
    UpdateAttendanceComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
