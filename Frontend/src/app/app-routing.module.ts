import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './Component/attendance/attendance.component';
import { LoginComponent } from './Component/login/login.component';
import { InventoryDetailsComponent } from './Component/inventory-details/inventory-details.component';
import { InventoryInTimeComponent } from './Component/inventory-in-time/inventory-in-time.component';
import { InventoryOutTimeComponent } from './Component/inventory-out-time/inventory-out-time.component';
import { AssignInventoryComponent } from './Component/assign-inventory/assign-inventory.component';
import { UpdateAssignedInventoryComponent } from './Component/update-assigned-inventory/update-assigned-inventory.component';
import { AssignInventoryLaceComponent } from './Component/assign-inventory-lace/assign-inventory-lace.component';
import { AssignInventoryMoldingComponent } from './Component/assign-inventory-molding/assign-inventory-molding.component';
import { AssignInventoryLayingComponent } from './Component/assign-inventory-laying/assign-inventory-laying.component';
import { AssignInventoryBindingComponent } from './Component/assign-inventory-binding/assign-inventory-binding.component';
import { AssignInventoryQadComponent } from './Component/assign-inventory-qad/assign-inventory-qad.component';
import { AuthGuard } from './Component/authentication/authentication';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inventory_details', component: InventoryDetailsComponent, canActivate: [AuthGuard]  },
  { path: 'inventory_in', component: InventoryInTimeComponent, canActivate: [AuthGuard]  },
  { path: 'inventory_out', component: InventoryOutTimeComponent, canActivate: [AuthGuard]  },
  { path: 'inventory_assign', component: AssignInventoryComponent, canActivate: [AuthGuard]  },
  { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuard]  },
  { path: 'update_inventory/:id', component: UpdateAssignedInventoryComponent, canActivate: [AuthGuard]  },
  { path: 'inventory_assign_lace', component: AssignInventoryLaceComponent, canActivate: [AuthGuard]  },
  {
    path: 'inventory_assign_molding',
    component: AssignInventoryMoldingComponent, canActivate: [AuthGuard]
  },
  {
    path: 'inventory_assign_laying',
    component: AssignInventoryLayingComponent, canActivate: [AuthGuard]
  },
  {
    path: 'inventory_assign_binding',
    component: AssignInventoryBindingComponent, canActivate: [AuthGuard] ,
  },
  { path: 'inventory_assign_qad', component: AssignInventoryQadComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
