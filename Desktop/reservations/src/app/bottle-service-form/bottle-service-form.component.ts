import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottle-service-form',
  templateUrl: './bottle-service-form.component.html',
  styleUrls: ['./bottle-service-form.component.css']
})
export class BottleServiceFormComponent implements OnInit {
  public firstname:string;

  constructor() { }

  ngOnInit() {
  }

  nameIs(name){
    console.log(name);
  }

}
