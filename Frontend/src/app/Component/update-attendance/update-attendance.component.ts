import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.css']
})
export class UpdateAttendanceComponent implements OnInit {
  attendanceForm!: FormGroup;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public markattendance : any,
    private dialogref : MatDialogRef<UpdateAttendanceComponent>,

  ) { }

  ngOnInit(): void {
    this.attendanceForm = this.formBuilder.group({
      epf_No: ['', Validators.required],
      employee_Name: ['', Validators.required],
      tool_No: ['', Validators.required],
      date: ['', Validators.required],
      inv_in: ['', Validators.required],
      shift: ['', Validators.required],
      section: ['', Validators.required],
    });
    if (this.markattendance) {

        this.attendanceForm.controls['epf_No'].setValue(
          this.markattendance.epf_No);

          this.attendanceForm.controls['employee_Name'].setValue(
            this.markattendance.employee_Name);

            this.attendanceForm.controls['tool_No'].setValue(
              this.markattendance.tool_No);

              this.attendanceForm.controls['date'].setValue(
                this.markattendance.date);

                this.attendanceForm.controls['inv_in'].setValue(
                  this.markattendance.inv_in);

                  this.attendanceForm.controls['shift'].setValue(
                    this.markattendance.shift);

                    this.attendanceForm.controls['section'].setValue(
                      this.markattendance.section);
      }
  }

  addattendance(){
    if(this.attendanceForm.valid){
      console.log(this.attendanceForm.value);
      this.api.postAttendance(this.attendanceForm.value)
      .subscribe({
        next:(res)=>{
          alert("Attendance Marked successfully")
          this.attendanceForm.reset();
          this.dialogref.close();
        },
        error:()=>{
          alert("Error")

        }

      })


    }
  }

}
