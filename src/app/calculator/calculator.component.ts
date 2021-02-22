import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1: any
  value2: any
  sum: any
  operator: string = ""
  number: string = ''
  eq_opr: string = ''
  setoperator(opr: any) {

    if (opr == "=") {
      this.eq_opr = opr
    if(opr=="+")
    this.operator=="+"
       
        this.sum = parseInt(this.value1) + parseInt(this.value2)
        console.log("sum",this.sum)
      }

       if (this.operator ==  "-") {
        
        this.sum = parseInt(this.value1)-parseInt(this.value2)
         }
  if (this.operator == "*") {

        this.sum = parseInt(this.value1) * parseInt(this.value2)
      }

        if (this.operator == "/") {
        this.sum = parseInt(this.value1) / parseInt(this.value2)
      }
    
    
    else {
      this.operator = opr

    }
  }

  setvalue1(event: any) {
    this.value1 = (event.target as HTMLInputElement).value
  }
  setvalue2(event: any) {
    this.value2 = (event.target as HTMLInputElement).value
  }
 

  ngOnInit(): void { }
  setvalue(data: string) {
    if (this.operator == "") {
      this.value1 = data

    } else {
      this.value2 = data

    }
  }
}
