import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductServices } from 'src/app/_services/product.services';

@Component({
  selector: 'app-item-listing-parent',
  templateUrl:'./item-listing-parent.component.html',
  styleUrls: ['./item-listing-parent.component.scss']
})
export class ItemListingParentComponent implements OnInit {
  productArray!:Product[]
   
  //   {name:"one",price:100,description:"This is number one",discount:50,qnty:1,imageUrl:"https://picsum.photos/200/100"},
  //   {name:"two",price:200,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/200",qnty:1},
  //   {name:"three",price:300,description:"This is number one",imageUrl:"https://picsum.photos/200/300",qnty:1},
  //   {name:"four",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400",qnty:1},
  //   {name:"five",price:100,description:"This is number one",imageUrl:"https://picsum.photos/200/100",qnty:1},
  //   {name:"six",price:200,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/200",qnty:1},
  //   {name:"seven",price:300,description:"This is number one",imageUrl:"https://picsum.photos/200/300",qnty:1},
  //   {name:"eight",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400",qnty:1},
  //   {name:"nine",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400",qnty:1}
  // ]
  
  constructor(private productService:ProductServices) { }
 
  @ Output ()
  itemAddedFromList:EventEmitter <Product> = new EventEmitter <Product>();

  ngOnInit(): void {
    this.productArray=this.productService.getAllProducts()
  }
  onItemAdded(product:Product){
    // this.itemAddedFromList.emit(product);
    this.productService.additemToCart(product)
   
  }
}
