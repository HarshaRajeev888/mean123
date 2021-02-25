import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name=["anna","anu","roshna","roshan"]
  colors=["red","blue","yello","green"]
 
  constructor() { }

  ngOnInit(): void {
  }
 // col:any
 // color:string=""
  
 // color=(event:any){
   // this.col= (event.target as HTMLInputElement).value
 // }
//col1='red';
//col2='pink';
  
  

//}
