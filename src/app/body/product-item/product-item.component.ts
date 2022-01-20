import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductServices } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
@Input ()
productItem !:Product;

// @Output()
// itemAdded:EventEmitter<Product>=new EventEmitter <Product>();
  constructor(private productService:ProductServices) { }

  ngOnInit(): void {
  }
  onAddToCartPressed(){
    // this.productService.additemToCart(this.productItem)
    this.productService.itemAdded.emit(this.productItem)
   
    // this.itemAdded.emit(this.productItem)
    
  }

}
