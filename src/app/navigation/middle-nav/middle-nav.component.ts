import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductDetails } from 'src/app/_models/product.model';

@Component({
  selector: 'app-middle-nav',
  templateUrl: './middle-nav.component.html',
  styleUrls: ['./middle-nav.component.scss']
})
export class MiddleNavComponent implements OnInit {
cartIsOpen=false;

  constructor() { }
  @Input() cart!:ProductDetails

  ngOnInit(): void {
  }
  
  delete(index:number){
    console.log(this.cart.products[index])
    this.cart.itemsNumber=this.cart.itemsNumber-this.cart.products[index].qnty
    this.cart.products.splice(index, 1);
  }

}
