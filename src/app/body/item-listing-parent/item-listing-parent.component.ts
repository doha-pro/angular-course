import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-item-listing-parent',
  templateUrl:'./item-listing-parent.component.html',
  styleUrls: ['./item-listing-parent.component.scss']
})
export class ItemListingParentComponent implements OnInit {
  productArray:Product[]=[
   
    {name:"one",price:100,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/100"},
    {name:"two",price:200,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/200"},
    {name:"three",price:300,description:"This is number one",imageUrl:"https://picsum.photos/200/300"},
    {name:"four",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400"},
    {name:"one",price:100,description:"This is number one",imageUrl:"https://picsum.photos/200/100"},
    {name:"two",price:200,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/200"},
    {name:"three",price:300,description:"This is number one",imageUrl:"https://picsum.photos/200/300"},
    {name:"four",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400"},
    {name:"four",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400"},
  ]
  
  constructor() { }
 
  @ Output ()
  itemAddedFromList:EventEmitter <Product> = new EventEmitter <Product>();

  ngOnInit(): void {
  }
  onItemAdded(product:Product){
    this.itemAddedFromList.emit(product);
    console.log(product);
  }
}
