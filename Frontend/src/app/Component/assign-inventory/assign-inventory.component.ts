import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-assign-inventory',
  templateUrl: './assign-inventory.component.html',
  styleUrls: ['./assign-inventory.component.css']
})
export class AssignInventoryComponent implements OnInit {

  inventoryForm ! : FormGroup;
  static this  : any;

  constructor(private formBuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.inventoryForm = this.formBuilder.group({
      epf_No : ['',Validators.required],
      employee_Name : ['',Validators.required],
      section : ['',Validators.required],
      tool_Name : ['',Validators.required],
      tool_No : ['',Validators.required],
      assign_date : ['',Validators.required]

    })


  }


  addInventory(){

    if(this.inventoryForm.valid){
      console.log(this.inventoryForm.value)
      this.api.postInventory(this.inventoryForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product added successfully")
        },
        error:()=>{
          alert("Error")

        }

      })

    }
 }


}


