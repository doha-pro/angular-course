import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductDetails } from 'src/app/_models/product.model';
import { ProductServices } from 'src/app/_services/product.services';

@Component({
  selector: 'app-middle-nav',
  templateUrl: './middle-nav.component.html',
  styleUrls: ['./middle-nav.component.scss']
})
export class MiddleNavComponent implements OnInit {
cartIsOpen=false;

  constructor(private productService:ProductServices) { }
  @Input() 
  cart!:ProductDetails

  ngOnInit(): void {
    // this.productService.itemAdded.subscribe(
      // next()=>{}
    // )

    // console.log(this.productService.itemAdded.subscribe())
    // this.cart.products=this.productService.cartArray

    // this.productService.itemadd
  }
  
  delete(index:number){
    console.log(this.cart.products[index])
    this.cart.itemsNumber=this.cart.itemsNumber-this.cart.products[index].qnty
    this.cart.products.splice(index, 1);
  }

}
