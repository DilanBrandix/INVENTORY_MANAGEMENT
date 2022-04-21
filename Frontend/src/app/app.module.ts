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
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AssignInventoryLaceComponent } from './Component/assign-inventory-lace/assign-inventory-lace.component';
import { AssignInventoryMoldingComponent } from './Component/assign-inventory-molding/assign-inventory-molding.component';
import { AssignInventoryLayingComponent } from './Component/assign-inventory-laying/assign-inventory-laying.component';
import { AssignInventoryBindingComponent } from './Component/assign-inventory-binding/assign-inventory-binding.component';
import { AssignInventoryQadComponent } from './Component/assign-inventory-qad/assign-inventory-qad.component';


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
    UpdateAttendanceComponent,
    AssignInventoryLaceComponent,
    AssignInventoryMoldingComponent,
    AssignInventoryLayingComponent,
    AssignInventoryBindingComponent,
    AssignInventoryQadComponent

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
    MatDialogModule,
    MatTableExporterModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
