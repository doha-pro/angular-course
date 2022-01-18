import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-middle-nav',
  templateUrl: './middle-nav.component.html',
  styleUrls: ['./middle-nav.component.scss']
})
export class MiddleNavComponent implements OnInit {
cartIsOpen=false;
  constructor() { }
  @Input() cart!:Product[];

// totalPrice:number=this.Total()
// Total():number {
//   this.totalPrice=0
//   for (let i in this.cart){
//     this.cart[i].discount ? 
//     this.totalPrice=this.totalPrice+(this.cart[i].price *this.cart[i].qnty)
    
//     :
// this.totalPrice=this.totalPrice+(this.cart[i].price *this.cart[i].qnty)
//   }
//   return this.totalPrice
//   }

  ngOnInit(): void {
  }
  



  delete(index:number){
    this.cart.splice(index, 1)
  }

}
