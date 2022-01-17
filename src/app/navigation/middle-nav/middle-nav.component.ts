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

  ngOnInit(): void {
  }
  
//   delete(index: number) {
//     this.cart.removeItem(index);
// }

  delete(index:number){
    this.cart=this.cart.splice(index, 1)
  }

}
