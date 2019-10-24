import { Component, OnInit } from '@angular/core';
import { HttpClient } from  "@angular/common/http";

@Component({
  selector: 'app-bottle-service-form',
  templateUrl: './bottle-service-form.component.html',
  styleUrls: ['./bottle-service-form.component.css']
})
export class BottleServiceFormComponent implements OnInit {
  public firstname:string;
  public lastname:string;
  public phone:number;
  public email:number;
  public minimum:number;
  public guests:number;
  public event:string;

  public reservation:{};

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

  pushReservation(){
    this.reservation = {
      firstname:this.firstname,
      lastname:this.lastname,
      phone:this.phone,
      email:this.email,
      minimum:this.minimum,
      guests:this.guests,
      event:this.event
    }
    console.log(this.reservation);
  }



}
