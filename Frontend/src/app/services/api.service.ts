import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = `${environment.api}`;

  constructor(private http : HttpClient) { }

  postInventory(data : any){
    return this.http.post<any>(`${this.apiUrl}/feed`,data);
  }

  getInventory(){
    return this.http.get<any>(`${this.apiUrl}/feed`);
  }

  postAttendance(data : any){
    return this.http.post<any>(`${this.apiUrl}/time-in`,data);
  }

  getSpecificInventory(id: number){
    return this.http.get<any>(`${this.apiUrl}/feed/inventory/${id}`);
  }

  putInventory(data : any){
    return this.http.put<any>(`${this.apiUrl}/feed`,data);
  }
}
