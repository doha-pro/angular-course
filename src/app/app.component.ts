import { Component } from '@angular/core';
import { Product } from './_models/product.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'day2';
  products:Product[]=[];

onItemAddedFromList(product:Product){
  console.log(product)
  this.products.push(product);

}
}
