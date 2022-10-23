import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addData = (data:any)=>{
    return this.http.post("http://localhost:8080/addData",data)
  }

  viewData = ()=>{
    return this.http.get("http://localhost:8080/viewData")
  }

  login = (data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }
}
