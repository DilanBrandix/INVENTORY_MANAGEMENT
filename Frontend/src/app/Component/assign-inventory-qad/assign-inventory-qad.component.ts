import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assign-inventory-qad',
  templateUrl: './assign-inventory-qad.component.html',
  styleUrls: ['./assign-inventory-qad.component.css']
})
export class AssignInventoryQadComponent implements OnInit {
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

}
