import { Component } from '@angular/core';
import { Product } from './_models/product.model';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // faCoffee = faCoffee;
  title = 'day2';
  products:Product[]=[];

onItemAddedFromList(product:Product){
 
  if(this.products.length===0){
    this.products.push(product);
  
  }else{
    let found= this.products.find(x => x.name == product.name);
    found? found.qnty++ :this.products.push(product)
      
    
    }
    
  }

  

  
  // console.log(found.qnty)
  
  // console.log(this.products)


}
