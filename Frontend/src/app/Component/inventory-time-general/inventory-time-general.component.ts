import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-inventory-time-general',
  templateUrl: './inventory-time-general.component.html',
  styleUrls: ['./inventory-time-general.component.css'],

})
export class InventoryTimeGeneralComponent implements OnInit {
  // displayedRows: string[] = ['shift'];
  displayedColumns: string[] = [
    'no',
    'tool_No',
    'epf_No',
    'employee_Name',
    'section',
    'shift',
    'inv_in',
    'date',

  ];
  dataSource!: MatTableDataSource<any>;
  pipe: DatePipe;
  static this: any;

  shift:any;




  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
});

// get fromDate() {return this.filterForm.get('fromDate')?.value }
// get toDate() { return this.filterForm.get('toDate')?.value; }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private api: ApiService,
    private userDetails: UserDetailsService,

    ) {



    // this.shift = this.displayedRows[this.shift]
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {

    this.getAllAttendance();
  }

  async getAllAttendance() {
    const userRole = await this.userDetails.getUserRole()
    this.api.getattendance(userRole).subscribe({
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
  applyFilters() {
    this.dataSource.filter = ''+Math.random();
  }


}
