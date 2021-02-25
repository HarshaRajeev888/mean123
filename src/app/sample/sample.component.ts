import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
// data:string="hello all good evening"
// name=["anna","anu","roshna","roshan"]
// colors=["red","blue","yello","green"]

style1={'color':'red'}
  style2={'color':'blue'}
  check='false'

  constructor() { }

  ngOnInit(): void {
  }

}
