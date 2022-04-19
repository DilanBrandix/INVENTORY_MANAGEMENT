import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateAttendanceComponent } from '../update-attendance/update-attendance.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  attendanceForm ! : FormGroup;
  inventoryDetails: any;
  inventoryId: number;



  displayedColumns: string[] = [ 'tool_No', 'tool_Name','section', 'epf_No','employee_Name','mark'];
  dataSource!: MatTableDataSource<any>;
  static this: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    private api : ApiService,
    private formBuilder : FormBuilder,
    private activatedroute: ActivatedRoute,
    private dialog : MatDialog,
    ) {

    this.inventoryId = parseInt(
      this.activatedroute.snapshot.paramMap.get('id') || ''
    );

    this.api.getSpecificInventory(this.inventoryId).subscribe((result) => {
      this.inventoryDetails = result;
      if (this.inventoryDetails) {
        // this.attendanceForm.controls['no'].setValue(
        //   this.inventoryDetails.no);

        this.attendanceForm.controls['section'].setValue(
          this.inventoryDetails.section
        );
        this.attendanceForm.controls['tool_Name'].setValue(
          this.inventoryDetails.tool_Name
        );
        this.attendanceForm.controls['tool_No'].setValue(
          this.inventoryDetails.tool_No
        );
        this.attendanceForm.controls['epf_No'].setValue(
          this.inventoryDetails.epf_No
        );
        this.attendanceForm.controls['employee_Name'].setValue(
          this.inventoryDetails.employee_Name
        );
        this.attendanceForm.controls['date'].setValue(
          this.inventoryDetails.date
        );
        this.attendanceForm.controls['inv_in'].setValue(
          this.inventoryDetails.date
        );
        this.attendanceForm.controls['shift'].setValue(
          this.inventoryDetails.date
        );
      }
    });


   }

  ngOnInit(): void {

    // this.attendanceForm = this.formBuilder.group({
    //   attendace: this.formBuilder.array([]),
    // });

    this.attendanceForm= this.formBuilder.group({
      epf_No : ['',Validators.required],
      employee_Name : ['',Validators.required],
      section : ['',Validators.required],
      tool_Name : ['',Validators.required],
      tool_No : ['',Validators.required],

    })
    this.getAllInventory();

  }

  markattendence(element : any) {
    this.dialog.open(UpdateAttendanceComponent, {
      width:'30%',
      data:element
    });
  }

  getAllInventory(){
    this.api.getInventory()
    .subscribe({
      next:(res)=>{

        this.dataSource = new MatTableDataSource(res);
        console.log(res);
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
}
