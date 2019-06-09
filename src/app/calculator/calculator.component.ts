import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  number1:number;
  number2:number;
  cal = 'addition';
  kq:any;

  constructor() {
  }

  ngOnInit() {
  }

  result() {
    if (this.cal == "addition") {
      this.kq = Number(this.number1) + Number(this.number2);
    }
    if (this.cal == "subtraction") {
      this.kq = Number(this.number1) - Number(this.number2)
    }
    if (this.cal == "multiplication") {
      this.kq = Number(this.number1) * Number(this.number2)
    }
    if (this.cal == "division") {
      if (this.number2 == 0) {
        this.kq = "vo nghiem";
      }
      else{
        this.kq = this.number1/this.number2
      }
    }
  }
}
