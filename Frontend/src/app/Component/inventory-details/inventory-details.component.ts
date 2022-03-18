import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  toolNo: string;
  toolName: string;
  epfNo: string;
  empName: string;
  section: string;
  date: any;
  button: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, toolNo: 'BSC - 01', toolName: 'Scissor', epfNo: '31582', empName:'Dilan Perera', section:'Bundling', date:'03/04/2022', button:'Update'},
  {position: 2, toolNo: 'BSC - 02', toolName: 'Scissor', epfNo: '31583', empName:'Maleesha Withanage', section:'Bundling',date:'03/10/2022',button:'Update'},
  {position: 3, toolNo: 'BSC - 03', toolName: 'Scissor', epfNo: '31584', empName:'Nishie Fernando', section:'Bundling',date:'03/18/2022',button:'Update'},

];

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {


  displayedColumns: string[] = ['position', 'toolNo', 'toolName', 'epfNo','empName','section','date','button'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
