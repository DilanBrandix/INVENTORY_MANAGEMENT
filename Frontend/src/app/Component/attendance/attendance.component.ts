import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  attendanceForm ! : FormGroup;



  displayedColumns: string[] = [ 'tool_No', 'tool_Name','section', 'epf_No','employee_Name','date','inv_in','shift','mark'];
  dataSource!: MatTableDataSource<any>;
  static this: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private api : ApiService, private formBuilder : FormBuilder,) { }

  ngOnInit(): void {
    this.attendanceForm= this.formBuilder.group({
      epf_No : ['',Validators.required],
      employee_Name : ['',Validators.required],
      section : ['',Validators.required],
      tool_Name : ['',Validators.required],
      tool_No : ['',Validators.required],
      date : ['',Validators.required],
      inv_in : ['',Validators.required],
      shift : ['',Validators.required],
    })
    this.getAllInventory();
  }

  getAllInventory(){
    this.api.getInventory()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);

      },
      error:(err)=>{
        console.log(err);

      }
    })

  }
  addAttendance(){

    if(this.attendanceForm.valid){
      console.log(this.attendanceForm.value)
      this.api.postAttendance(this.attendanceForm.value)
      .subscribe({
        next:(res)=>{
          // alert("Product added successfully")
          console.log(res)
        },
        error:(res)=>{
          console.log(res)

        }

      })

    }
 }
}
