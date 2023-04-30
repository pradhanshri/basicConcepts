import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  pName: string = "Samsung M31";
  pId: number = 123;
  pStatus: string ="InTransition";
  isDisabled: boolean =true;
  isProdAvalaible !: boolean

  constructor() { }

  ngOnInit(): void {
    this.isProdAvalaible = Math.random() >= 0.5 ? true : false;
    setTimeout(() => {
      this.isDisabled=false;
    }, 4000);
  }

  getColor(){
   if(this.isProdAvalaible){
    return 'orange';
   }else{
    return '#ccc'
   }

  }
}