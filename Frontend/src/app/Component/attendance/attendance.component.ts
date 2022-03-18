import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

interface Attendance {
  toolNo: string;
  toolName: string;
  epfNo: string;
  empName: string;
  section: string;
  date: any;
  inOut: any;
  shift:any;
  mark:any;

}

const ATTENDANCE: Attendance[] = [
  { toolNo: 'BSC - 01', toolName: 'Scissor', epfNo: '31582', empName:'Dilan Perera', section:'Bundling',date:'',inOut:'',shift:'',mark:'Mark'},
  { toolNo: 'BSC - 02', toolName: 'Scissor', epfNo: '31583', empName:'Maleesha Withanage',section:'Bundling',date:'',inOut:'',shift:'',mark:'Mark' },
  { toolNo: 'BSC - 03', toolName: 'Scissor', epfNo: '31584', empName:'Nishie Fernando',section:'Bundling',date:'',inOut:'',shift:'',mark:'Mark' },
]

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {


  displayedColumns: string[] = [ 'toolNo', 'toolName','section', 'epfNo','empName','date','inOut','shift','mark'];
  dataSource = new MatTableDataSource(ATTENDANCE);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
