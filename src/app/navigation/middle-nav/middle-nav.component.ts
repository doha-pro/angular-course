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
  // cart!:ProductDetails
  productDetails:ProductDetails={
    products:[],itemsNumber:0,Total:0
  }


  ngOnInit(): void {
    this.productService.itemAdded.subscribe(
      (next:Product)=>{
        // this.productDetails.products.push(next);
          console.log(this.productDetails.products)
           this.productDetails.itemsNumber++
          if(this.productDetails.products.length===0){
            this.productDetails.Total=next.price;
            this.productDetails.products.push(next);
            
            
          }else{
            let found= this.productDetails.products.find(x => x.name == next.name);
            found? found.qnty++ :this.productDetails.products.push(next)
            
            this.productDetails.Total=this.productDetails.Total+next.price
            
            
          }
          console.log(this.productDetails)
  
}

    )
    
      // next()=>{}
    // )

    // console.log(this.productService.itemAdded.subscribe())
    // this.cart.products=this.productService.cartArray

    // this.productService.itemadd
  }
  
  delete(index:number){
    console.log(this.productDetails.products[index])
    this.productDetails.itemsNumber=this.productDetails.itemsNumber-this.productDetails.products[index].qnty
    this.productDetails.products.splice(index, 1);
  }

}
