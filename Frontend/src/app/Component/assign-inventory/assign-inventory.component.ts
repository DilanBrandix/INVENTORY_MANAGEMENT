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

  constructor(private formBuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.inventoryForm = this.formBuilder.group({
      epfNumber : ['',Validators.required],
      employeeName : ['',Validators.required],
      section : ['',Validators.required],
      toolName : ['',Validators.required],
      toolNumber : ['',Validators.required],
      date : ['',Validators.required]

    })
  }

  addInventory(){
    if(this.inventoryForm.valid){
      this.api.postInventory(this.inventoryForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product added successfully")
        },
        error:(res)=>{
          console.log(res)

        }

      })

    }


 }

}


