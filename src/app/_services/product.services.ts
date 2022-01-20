import { EventEmitter } from "@angular/core";
import { Product } from "../_models/product.model";

export class ProductServices{
    itemAdded:EventEmitter<Product>=new EventEmitter<Product>();
    productArray:Product[]=[ 
        {id:1 ,name:"one",price:100,description:"This is number one",discount:50,qnty:1,imageUrl:"https://picsum.photos/200/100"},
        {id:2,name:"two",price:200,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/200",qnty:1},
        {id:3 ,name:"three",price:300,description:"This is number one",imageUrl:"https://picsum.photos/200/300",qnty:1},
        {id: 4,name:"four",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400",qnty:1},
        {id:5 ,name:"five",price:100,description:"This is number one",imageUrl:"https://picsum.photos/200/100",qnty:1},
        {id:6 ,name:"six",price:200,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/200",qnty:1},
        {id:7 ,name:"seven",price:300,description:"This is number one",imageUrl:"https://picsum.photos/200/300",qnty:1},
        {id:8 ,name:"eight",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400",qnty:1},
        {id:9 ,name:"nine",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400",qnty:1}
      ];
      constructor(){}
    getAllProducts():Product[]{
        return this.productArray.slice();
    }
    getProductbyId(id:number):Product |undefined{
        return this.productArray.find(i=>i.id===id)
    }
    addProduct(product:Product):void{
        this.productArray.push(product);
    }
    deleteProduct(id:number){
        this.productArray.filter(item=>item.id!=id)

    }
    updateProduct(){}
    cartArray:Product[]=[]
    additemToCart(product:Product):Product[]{
      const  result=[...this.cartArray,product]
        this.cartArray=result
        console.log("the cart array")
        console.log(this.cartArray)
        return result
    }
}