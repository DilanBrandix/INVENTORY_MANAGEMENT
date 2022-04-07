import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-assigned-inventory',
  templateUrl: './update-assigned-inventory.component.html',
  styleUrls: ['./update-assigned-inventory.component.css'],
})
export class UpdateAssignedInventoryComponent implements OnInit {
  inventoryId: number;
  inventoryDetails: any;
  inventoryForm!: FormGroup;

  constructor(
    private api: ApiService,
    private activatedroute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.inventoryId = parseInt(
      this.activatedroute.snapshot.paramMap.get('id') || ''
    );

    this.api.getSpecificInventory(this.inventoryId).subscribe((result) => {
      this.inventoryDetails = result;
      if (this.inventoryDetails) {
        this.inventoryForm.controls['no'].setValue(
          this.inventoryDetails.no);

        this.inventoryForm.controls['section'].setValue(
          this.inventoryDetails.section
        );
        this.inventoryForm.controls['tool_Name'].setValue(
          this.inventoryDetails.tool_Name
        );
        this.inventoryForm.controls['tool_No'].setValue(
          this.inventoryDetails.tool_No
        );
        this.inventoryForm.controls['epf_No'].setValue(
          this.inventoryDetails.epf_No
        );
        this.inventoryForm.controls['employee_Name'].setValue(
          this.inventoryDetails.employee_Name
        );
        this.inventoryForm.controls['assign_date'].setValue(
          this.inventoryDetails.assign_date
        );
      }
    });
  }

  ngOnInit(): void {
    this.inventoryForm = this.formBuilder.group({
      no: ['', Validators.required],
      epf_No: ['', Validators.required],
      employee_Name: ['', Validators.required],
      section: ['', Validators.required],
      tool_Name: ['', Validators.required],
      tool_No: ['', Validators.required],
      assign_date: ['', Validators.required],
    });
  }

  updateInventory() {
    if(this.inventoryForm.valid){
      console.log(this.inventoryForm.value)
      this.api.putInventory(this.inventoryForm.value)
      .subscribe({
        next:(res)=>{
          this.router.navigate(['inventory_details']);
        },
        error:()=>{
          alert("Error")

        }

      })

    }
  }
}
