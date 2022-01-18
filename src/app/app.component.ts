import { Component } from '@angular/core';
import { Product } from './_models/product.model';
import { ProductDetails } from './_models/product.model';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // faCoffee = faCoffee;
  title = 'day2';
  // productDetails:Object={ 
  //   products:[],
  //   itemsNumber:0
  // }
  productDetails:ProductDetails={
    products:[],itemsNumber:0,Total:0
  }

 

onItemAddedFromList(product:Product){
  this.productDetails.itemsNumber++;
 
  if(this.productDetails.products.length===0){
    // this.productDetails.itemsNumber=1;
    this.productDetails.Total=product.price
    this.productDetails.products.push(product);
    
    
  }else{
    let found= this.productDetails.products.find(x => x.name == product.name);
    found? found.qnty++ :this.productDetails?.products.push(product)
    
    this.productDetails.Total=this.productDetails?.Total+product.price
    
    
  }
  console.log(this.productDetails)
  
}

  

  
  // console.log(found.qnty)
  
  // console.log(this.products)


}
