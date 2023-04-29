import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isDisabled: boolean =true
  ProdStatus: string = `No Product Added Yet`
  prodCount: number = 0;
  pSearch !: string
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled=false;
    }, 1000);

    }

    onKeyUp(eve: Event){
      let val = (eve.target as HTMLInputElement).value;
      console.log(val);
      // console.log(eve.target.value)
    }

    onBtnClick(){
      this.prodCount++;
      this.ProdStatus = `${this.prodCount} Products Added Successfuly`;
      // console.log(`Product Added Successfuly`);
      
    }

    onBtnRemove(){
      if(this.prodCount > 0){
        this.prodCount--;
      this.ProdStatus = `${this.prodCount} Products Removed Successfuly`;
      }
    }

    onSearch(event: Event){
      let val = (<HTMLInputElement>event.target).value
      this.pSearch = val;
    }
}
