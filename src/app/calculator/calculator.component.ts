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
//   setNumber(num:any)
//   {
//   if(this.operator=="")
//   {
//     this.value1=num
//     console.log(this.value1)
//   }
//   else
//   {
//     this.value2=num
//     console.log(this.value2)
//   }
// }

// constructor() { }

// add(ok:any)
//   {
//    if(ok=='+') 
//    {

//     this.sum=parseInt(this.value1)+parseInt(this.value2)
//     console.log(this.sum)
//    }
//    else if(ok=='-')
//    {
//      this.sum=parseInt(this.value1)-parseInt(this.value2)
//      console.log(this.sum)
//    }
//    else if(ok=='*')
//    {
//      this.sum=parseInt(this.value1)*parseInt(this.value2)
//      console.log(this.sum)
//    }
//    else if(ok=='/')
//    {
//      this.sum=parseInt(this.value1)/parseInt(this.value2)
//      console.log(this.sum)
//    }
//   }
  // setvalue1(event:any){
  //   this.value1=(event.target as HTMLInputElement).value
  //  }
  //  setvalue2(event:any){
  //    this.value2=(event.target as HTMLInputElement).value
  //   }




// ngOnInit():void {}
//   setvalue1(data){
//     if(this.operator==""){
//       this.value1=data
//     }else{
//       this.value2=data
//     }
//   }







//   value1:string=''
//   value2:string=''
//   result:number=0
//   operator:string=""
//   number:string=''

// number1=['1','2','3','4','5']
// number2=['6','7','8','9','0']
// number3=['+','-','*','/']



//   setOperator(opr:any){
//     if(opr=="+"){
//       this.operator='+'
//       console.log(this.operator)
//     }
//     else if(opr=="-"){
//       this.operator='-'
//       console.log(this.operator)
//     }
//     else if(opr=="*"){
//       this.operator='*'
//       console.log(this.operator)
//     }
//     else if(opr=="/"){
//       this.operator='/'
//       console.log(this.operator)
//     }

//     else{
//       console.log("undefined")
//     }
//   }
//     setNumber(num:any){
//       if(this.operator==""){
//         this.value1=num
//         console.log(this.value1)
//       }
//       else{
//       this.value2=num
//       console.log(this.value2)
//       }
//     }
//     constructor(){}
//       add(ok:any)
//     {
//      if(ok=='+') 
//      {

//       this.result=parseInt(this.value1)+parseInt(this.value2)
//       console.log(this.result)
//      }
//      else if(ok=='-')
//      {
//        this.result=parseInt(this.value1)-parseInt(this.value2)
//        console.log(this.result)
//      }
//      else if(ok=='*')
//      {
//        this.result=parseInt(this.value1)*parseInt(this.value2)
//        console.log(this.result)
//      }
//      else if(ok=='/')
//      {
//        this.result=parseInt(this.value1)/parseInt(this.value2)
//        console.log(this.result)
//      }
//     }





//   ngOnInit() {
//   }

// }














//   // numbers1=['1','2','3','4','5']
//   // numbers2=['6','7','8','9','0']
//   //  numbers3=['+','-','*','/']

//   // constructor() { }

// //   ngOnInit(): void {
// //   }
// //    add(){
// //      console.log("adding number")

// //   this.result=parseInt(this.value1)+parseInt(this.value2)
// //    }

  // setvalue1(event:any){
  //  this.value1=(event.target as HTMLInputElement).value
  // }
  // setvalue2(event:any){
  //   this.value2=(event.target as HTMLInputElement).value
  //  }









