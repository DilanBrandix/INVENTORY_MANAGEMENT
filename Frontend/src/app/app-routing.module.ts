import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AttendanceComponent } from "./Component/attendance/attendance.component";
import { LoginComponent } from "./Component/login/login.component";
import { InventoryDetailsComponent } from "./Component/inventory-details/inventory-details.component";
import { InventoryInTimeComponent } from "./Component/inventory-in-time/inventory-in-time.component";
import { InventoryOutTimeComponent } from "./Component/inventory-out-time/inventory-out-time.component";
import { AssignInventoryComponent } from "./Component/assign-inventory/assign-inventory.component";
import { UpdateAssignedInventoryComponent } from "./Component/update-assigned-inventory/update-assigned-inventory.component";

const routes: Routes = [
  {path: 'inventory_details', component:InventoryDetailsComponent},
  {path: '', component:LoginComponent},
  {path: 'inventory_in', component:InventoryInTimeComponent},
  {path: 'inventory_out', component:InventoryOutTimeComponent},
  {path: 'inventory_assign', component:AssignInventoryComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'update_inventory/:id',component:UpdateAssignedInventoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

