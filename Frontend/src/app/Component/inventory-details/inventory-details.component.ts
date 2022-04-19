import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { UpdateAssignedInventoryComponent } from '../update-assigned-inventory/update-assigned-inventory.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css'],
})
export class InventoryDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'no',
    'tool_No',
    'tool_Name',
    'epf_No',
    'employee_Name',
    'section',
    'assign_date',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  static this: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private api: ApiService, private router: Router) {}

  updateInventory(row: any) {
    //console.log(row)
    this.router.navigate(['update_inventory', row.no]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.getAllInventory();
  }

  getAllInventory() {
    this.api.getInventory().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
