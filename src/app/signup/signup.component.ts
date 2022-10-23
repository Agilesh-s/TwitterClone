import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""
  mobileNumber = ""
  email = ""
  address = ""
  dob = ""
  password = ""

  readValues = ()=>{
    let data = {
      "name":this.name,
      "mobileNumber":this.mobileNumber,
      "email":this.email,
      "address":this.address,
      "dob":this.dob,
      "password":this.password
    }
    console.log(data)
    this.myApi.addData(data).subscribe(
    (response)=>{
      alert("ADDED SUCCESSFULLY")
    }
    )
    this.name = "",
    this.mobileNumber = "",
    this.email = "",
    this.address = "",
    this.dob = "",
    this.password = ""
  }

  ngOnInit(): void {
  }

}
