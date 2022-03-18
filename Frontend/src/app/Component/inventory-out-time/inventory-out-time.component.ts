import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  toolNo: string;
  toolName: string;
  epfNo: string;
  empName: string;
  section: string;
  timeIn: any;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, toolNo: 'BSC - 01', toolName: 'Scissor', epfNo: '31582', empName:'Dilan Perera', section:'Bundling',timeIn:'07:30 AM'},
  {position: 2, toolNo: 'BSC - 02', toolName: 'Scissor', epfNo: '31583', empName:'Maleesha Withanage',section:'Bundling',timeIn:'07:30 AM' },
  {position: 3, toolNo: 'BSC - 03', toolName: 'Scissor', epfNo: '31584', empName:'Nishie Fernando',section:'Bundling',timeIn:'07:30 AM' },
];



@Component({
  selector: 'app-inventory-out-time',
  templateUrl: './inventory-out-time.component.html',
  styleUrls: ['./inventory-out-time.component.css']
})
export class InventoryOutTimeComponent implements OnInit {


  displayedRows: string[] = ['shift'];
  displayedColumns: string[] = ['position', 'toolNo', 'toolName', 'epfNo','empName','section','timeIn'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  constructor() { }

  ngOnInit(): void {
  }

}
